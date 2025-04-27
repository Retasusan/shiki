module Authenticatable
  extend ActiveSupport::Concern

  included do
    before_action :authorize_request
  end

  private

  def authorize_request
    token = request.headers['Authorization']&.split(' ')&.last
    if token
      decoded_token = JWT.decode(token, nil, true, {
        algorithms: ['RS256'],
        keyfinder: lambda do |headers|
          jwks = jwks_loader
          key = jwks.find { |k| k[:kid] == headers['kid'] }
          raise JWT::DecodeError, 'Key not found' unless key
          OpenSSL::PKey::RSA.new(Base64.decode64(key[:n]))
        end
      })
      payload = decoded_token[0]
  
      if payload['exp'] && Time.at(payload['exp']) < Time.now
        render json: { error: 'Token has expired' }, status: :unauthorized
      else
        @current_user = payload
      end
    else
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  rescue JWT::DecodeError => e
    render json: { error: "Invalid token: #{e.message}" }, status: :unauthorized
  end  
  
  def jwks_loader
    @jwks ||= begin
      jwks_raw = Net::HTTP.get(URI(ENV['AUTH0_JWKS_URI']))
      jwks_keys = JSON.parse(jwks_raw)['keys']
      jwks_keys.map do |key|
        {
          kid: key['kid'],
          n: key['n'],
          e: key['e']
        }
      end
    end
  end
  
end

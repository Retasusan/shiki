require 'openssl'
require 'base64'
# app/controllers/concerns/authenticatable.rb

module Authenticatable
  extend ActiveSupport::Concern

  included do
    before_action :authorize_request
  end

  private

  def authorize_request
    token = request.headers['Authorization']&.split(' ')&.last
    puts "[auth] Authorization header token: #{token.inspect}"

    if token
      header = JWT.decode(token, nil, false).last
      puts "[auth] Header: #{header.inspect}"

      jwks = jwks_loader
      puts "[auth] Loaded jwks: #{jwks.inspect}"

      key_data = jwks.find { |k| k[:kid] == header['kid'] }
      raise JWT::DecodeError, 'Key not found' unless key_data

      cert_text = "-----BEGIN CERTIFICATE-----\n#{key_data[:x5c].first}\n-----END CERTIFICATE-----"
      certificate = OpenSSL::X509::Certificate.new(cert_text)
      public_key = certificate.public_key

      decoded_token = JWT.decode(token, public_key, true, { algorithms: ['RS256'] })
      payload = decoded_token[0]

      if payload['exp'] && Time.at(payload['exp']) < Time.now
        puts "[auth] Token expired"
        render json: { error: 'Token has expired' }, status: :unauthorized
      else
        puts "[auth] Token valid, setting @current_user"
        @current_user = payload
      end
    else
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  rescue JWT::DecodeError => e
    puts "[auth] Decode error: #{e.message}"
    render json: { error: "Invalid token: #{e.message}" }, status: :unauthorized
  end

  def jwks_loader
    puts "[auth] Start jwks_loader"

    @jwks ||= begin
      jwks_raw = Net::HTTP.get(URI(ENV['AUTH0_JWKS_URI']))
      puts "[auth] Raw JWKS: #{jwks_raw[0..200]}..."
      jwks_keys = JSON.parse(jwks_raw)['keys']
      puts "[auth] Parsed jwks_keys: #{jwks_keys.inspect}"

      jwks_keys.map do |key|
        {
          kid: key['kid'],
          x5c: key['x5c']
        }
      end
    end
  end
end

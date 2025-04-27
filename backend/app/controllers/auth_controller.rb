class AuthController < ApplicationController
  def verify_token
    render json: { message: "Token is valid", user: @current_user }
  end
end
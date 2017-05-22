class CallbacksController < Devise::OmniauthCallbacksController
  def spotify
    puts "*" * 50
    session[:spotify_access_token] = request.env["omniauth.auth"]["credentials"]["token"]
    session[:spotify_refresh_token] = request.env["omniauth.auth"]["credentials"]["refresh_token"]
    puts "*" * 50
    @user = User.from_omniauth(request.env["omniauth.auth"])
    sign_in_and_redirect @user
  end

  def signout

  end
end

class CallbacksController < Devise::OmniauthCallbacksController
  def spotify
    # Add access token and refresh token to session hash
    session[:spotify_access_token] = request.env["omniauth.auth"]["credentials"]["token"]
    session[:spotify_refresh_token] = request.env["omniauth.auth"]["credentials"]["refresh_token"]
    
    @user = User.from_omniauth(request.env["omniauth.auth"])
    sign_in_and_redirect @user
  end

  def signout

  end
end

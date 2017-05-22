class Spotify
end


# response = HTTParty.post("https://accounts.spotify.com/api/token",
#   body: {
#     grant_type: "authorization_code",
#     code: params[:code],
#     redirect_uri: "http://localhost:3000/users/auth/spotify/callback",
#     client_id: ENV["spotify_client_id"],
#     client_secret: ENV["spotify_client_secret"]
#   }).to_json
# puts "*" * 50
# puts response
# puts "*" * 50

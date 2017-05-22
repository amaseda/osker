class PlaylistsController < ApplicationController
  def index
    playlists = Playlist.all.limit(30)
    @playlists_with_genre = playlists.map {|playlist| playlist.add_genres}
  end

  def new
    @playlist = Playlist.new
  end

  def create
    playlist_id = params[:playlist][:playlist_url].split("/playlist/")[1]
    response = HTTParty.get("https://api.spotify.com/v1/users/#{current_user.uid}/playlists/#{playlist_id}")
    redirect_to root_path
  end
end

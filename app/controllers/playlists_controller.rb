class PlaylistsController < ApplicationController
  def index
    playlists = Playlist.all.limit(30)
    @playlists_with_genre = playlists.map {|playlist| playlist.add_genres_and_artists}
  end

  def new
    @playlist = Playlist.new
  end

  def create
    playlist_data = Spotify.get_playlist(params[:playlist][:playlist_url], current_user, session[:spotify_access_token])
    artists_array = Spotify.generate_artists_array(playlist_data)
    Spotify.create_playlist_and_artists(playlist_data, params[:playlist], artists_array, params[:genres].split(", "))
    redirect_to root_path
  end
end

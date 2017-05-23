class Playlist < ApplicationRecord
  has_many :playlist_genres
  has_many :genres, through: :playlist_genres

  def add_genres_and_artists
    # Retrieve PlaylistGenres
    playlist_genres = PlaylistGenre.where(playlist: self)
    genres = playlist_genres.map {|pg| Genre.find(pg.genre_id).name }

    # Retrieve PlaylistArtists
    playlist_artists = PlaylistArtist.where(playlist: self)
    artists = playlist_artists.map {|pa| Artist.find(pa.artist_id).name }

    # Add genres array to playlist
    updated_playlist = self.as_json.merge(genres: genres).merge(artists: artists)
  end
end

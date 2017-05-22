class Playlist < ApplicationRecord
  has_many :playlist_genres
  has_many :genres, through: :playlist_genres

  def add_genres
    # Retrieve playlist genres
    playlist_genres = PlaylistGenre.where(playlist: self)
    genres = playlist_genres.map {|pg| Genre.find(pg.genre_id).name }

    # Add genres array to playlist
    updated_playlist = self.as_json.merge(genres: genres)
  end
end

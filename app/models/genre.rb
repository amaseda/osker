class Genre < ApplicationRecord
  has_many :playlist_genres
  has_many :playlists, through: :playlist_genres
end

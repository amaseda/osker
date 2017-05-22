class CreatePlaylistGenres < ActiveRecord::Migration[5.0]
  def change
    create_table :playlist_genres do |t|
      t.references :genre, foreign_key: true
      t.references :playlist, foreign_key: true

      t.timestamps
    end
  end
end

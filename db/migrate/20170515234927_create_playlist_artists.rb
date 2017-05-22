class CreatePlaylistArtists < ActiveRecord::Migration[5.0]
  def change
    create_table :playlist_artists do |t|
      t.references :playlist, foreign_key: true
      t.references :artist, foreign_key: true

      t.timestamps
    end
  end
end

class CreatePlaylists < ActiveRecord::Migration[5.0]
  def change
    create_table :playlists do |t|
      t.string :name
      t.string :playlist_url
      t.string :image_url
      t.integer :rating
      t.timestamps
    end
  end
end

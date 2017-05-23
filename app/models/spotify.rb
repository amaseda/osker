class Spotify
  def self.get_playlist(url, user, token)
    playlist_id = url.split("/playlist/")[1]
    response = HTTParty.get("https://api.spotify.com/v1/users/#{user.uid}/playlists/#{playlist_id}",
      headers: {
        "Authorization" => "Bearer #{token}"
      })
  end

  def self.generate_artists_array(playlist_data)
    items = playlist_data["tracks"]["items"]
    artists = items.map do |item|
      item["track"]["artists"].map do |artist|
        artist["name"]
      end
    end.flatten.uniq # Convert to single array and remove duplicate artists
  end

  def self.create_playlist_and_artists(playlist_data, playlist_params, artists_array, genres_array)
    new_playlist = Playlist.create!(
      name: playlist_params["name"],
      playlist_url: playlist_params["playlist_url"],
      image_url: playlist_data["images"][0]["url"]
    )

    # TODO: These next two code blocks are nearly identical. Encapsulate in a single method.
    genres_array.each do |genre|
      current_genre = Genre.find_by(name: genre)
      if(current_genre)
        PlaylistGenre.create!(playlist: new_playlist, genre: current_genre)
      else
        new_genre = Genre.create!(name: genre)
        PlaylistGenre.create!(playlist: new_playlist, genre: new_genre)
      end
    end

    artists_array.each do |artist|
      current_artist = Artist.find_by(name: artist)
      if(current_artist)
        PlaylistArtist.create!(playlist: new_playlist, artist: current_artist)
      else
        new_artist = Artist.create!(name: artist)
        PlaylistArtist.create!(playlist: new_playlist, artist: new_artist)
      end
    end
  end
end

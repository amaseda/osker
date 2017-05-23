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

  def self.create_playlist_genres_and_artists(playlist_data, playlist_params, artists_array, genres_array)
    new_playlist = Playlist.create(
      name: playlist_params["name"],
      playlist_url: playlist_params["playlist_url"],
      image_url: playlist_data["images"][0]["url"]
    )

    convert_string_array_to_base_and_join_instances(artists_array, Artist, PlaylistArtist, new_playlist)
    convert_string_array_to_base_and_join_instances(genres_array, Genre, PlaylistGenre, new_playlist)

    # genres_array.each do |genre|
    #   current_genre = Genre.find_by(name: genre)
    #   if(current_genre)
    #     PlaylistGenre.create(playlist: new_playlist, genre: current_genre)
    #   else
    #     new_genre = Genre.create(name: genre)
    #     PlaylistGenre.create(playlist: new_playlist, genre: new_genre)
    #   end
    # end

    # artists_array.each do |artist|
    #   current_artist = Artist.find_by(name: artist)
    #   if(current_artist)
    #     PlaylistArtist.create(playlist: new_playlist, artist: current_artist)
    #   else
    #     new_artist = Artist.create(name: artist)
    #     PlaylistArtist.create(playlist: new_playlist, artist: new_artist)
    #   end
    # end
  end

  def self.convert_string_array_to_base_and_join_instances(data, base_model, join_model, new_playlist)
    data.each do |item|
      current_item = base_model.find_by(name: item)
      if(current_item)
        join_model.create(playlist: new_playlist, base_model.to_s.downcase => current_item)
      else
        new_item = base_model.create(name: item)
        join_model.create(playlist: new_playlist, base_model.to_s.downcase => new_item)
      end
    end
  end
end

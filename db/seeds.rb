# Genres
pop = Genre.create(name: "Pop")
folk = Genre.create(name: "Folk")
instrumental = Genre.create(name: "Instrumental")
rock = Genre.create(name: "Rock")
electronic = Genre.create(name: "Electronic")
hip_hop = Genre.create(name: "Hip-Hop")
jazz = Genre.create(name: "Jazz")

#Playlists
emerging = Playlist.create(
  name: "Emerging",
  playlist_url: "https://open.spotify.com/user/allthingsgomusic/playlist/2VlzkJvSAd3PnLzo6llbL8",
  image_url: "https://u.scdn.co/images/pl/default/9c28b8b8cda30c7a83148670d0fde97e34e797c3",
)

jazz_hip_hop = Playlist.create(
  name: "When Jazz Meets Hip-Hop",
  playlist_url: "https://open.spotify.com/user/allthingsgomusic/playlist/06xhhi75sH6AErxcNkXMpC",
  image_url: "http://www.allthingsgomusic.com/wp-content/uploads/2016/05/jazz-hip-hop.jpg",
)

poolside = Playlist.create(
  name: "Infinity Poolside",
  playlist_url: "https://open.spotify.com/user/allthingsgomusic/playlist/4GIKWEw7tivSqQmXwSSKAN",
  image_url: "http://www.allthingsgomusic.com/wp-content/uploads/2016/05/infinite-poolside.jpg",
)

work_drugs = Playlist.create(
  name: "Work Drugs",
  playlist_url: "https://open.spotify.com/user/allthingsgomusic/playlist/4GIKWEw7tivSqQmXwSSKAN",
  image_url: "http://www.allthingsgomusic.com/wp-content/uploads/2016/05/WorkDrugs2-e1463454290515.jpg",
)

beach = Playlist.create(
  name: "Let's Go To The Beach",
  playlist_url: "https://open.spotify.com/user/allthingsgomusic/playlist/4GIKWEw7tivSqQmXwSSKAN",
  image_url: "http://www.allthingsgomusic.com/wp-content/uploads/2016/07/lets-go-to-the-beach.jpg",
)

best_2016 = Playlist.create(
  name: "Best Of 2016",
  playlist_url: "https://open.spotify.com/user/allthingsgomusic/playlist/4GIKWEw7tivSqQmXwSSKAN",
  image_url: "http://www.allthingsgomusic.com/wp-content/uploads/2016/06/best-of-2016-so-far.jpg",
)

bonjour = Playlist.create(
  name: "Bonjour",
  playlist_url: "https://open.spotify.com/user/allthingsgomusic/playlist/4GIKWEw7tivSqQmXwSSKAN",
  image_url: "http://www.allthingsgomusic.com/wp-content/uploads/2016/07/bastille-day-cover.jpg",
)

# PlaylistGenres
PlaylistGenre.create(playlist: emerging, genre: pop)
PlaylistGenre.create(playlist: emerging, genre: rock)
PlaylistGenre.create(playlist: emerging, genre: folk)
PlaylistGenre.create(playlist: emerging, genre: instrumental)
PlaylistGenre.create(playlist: emerging, genre: electronic)

PlaylistGenre.create(playlist: jazz_hip_hop, genre: hip_hop)
PlaylistGenre.create(playlist: jazz_hip_hop, genre: jazz)

PlaylistGenre.create(playlist: poolside, genre: pop)
PlaylistGenre.create(playlist: poolside, genre: electronic)

PlaylistGenre.create(playlist: work_drugs, genre: instrumental)
PlaylistGenre.create(playlist: work_drugs, genre: electronic)

PlaylistGenre.create(playlist: beach, genre: pop)
PlaylistGenre.create(playlist: beach, genre: folk)

PlaylistGenre.create(playlist: best_2016, genre: pop)
PlaylistGenre.create(playlist: best_2016, genre: electronic)
PlaylistGenre.create(playlist: best_2016, genre: rock)
PlaylistGenre.create(playlist: best_2016, genre: folk)
PlaylistGenre.create(playlist: best_2016, genre: hip_hop)

PlaylistGenre.create(playlist: bonjour, genre: pop)
PlaylistGenre.create(playlist: bonjour, genre: electronic)
PlaylistGenre.create(playlist: bonjour, genre: rock)
PlaylistGenre.create(playlist: bonjour, genre: hip_hop)

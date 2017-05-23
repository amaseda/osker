# Osker

A curated aggregator for Spotify playlists.

## Setup

```bash
$ git clone git@github.com:amaseda/osker.git
$ cd osker
$ bundle
$ rails db:create db:migrate db:seed
$ rails s
```
> You can then visit the app at `http://localhost:3000`

## When Submitting A Playlist...

- Whoever is currently logged-in to Osker must have created the playlist
- Playlist URL must be in this format: `https://open.spotify.com/user/allthingsgomusic/playlist/1Wcqe6BrQMH62KKxC0e98c`
- Genres must be comma-separated (e.g., `Pop, Instrumental, Electronic`)

> Will chisel away at these requirements as the app continues to be built...

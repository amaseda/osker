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

### Environment Variables

In order to run this app locally, you must have a valid Spotify application client ID and client secret. You can get these by registering a Spotify application [here](https://developer.spotify.com/my-applications/).

Once you've done that, install the Figaro gem. It is already included in the Gemfile, so you just need to run the following command from the app's root directory...

```bash
$ bundle exec figaro install
```

This will create an `application.yml` file in the app's `config` directory. Place your Spotify app client ID and client secret in this file, like so...

```rb
# config/application.yml

spotify_client_id: client-id-goes-here
spotify_client_secret: client-secret-goes-here
```

You can then visit the app at `http://localhost:3000`

## When Submitting A Playlist...

- Whoever is currently logged-in to Osker must have created the playlist
- Playlist URL must be in this format: `https://open.spotify.com/user/allthingsgomusic/playlist/1Wcqe6BrQMH62KKxC0e98c`
- Genres must be comma-separated (e.g., `Pop, Instrumental, Electronic`)

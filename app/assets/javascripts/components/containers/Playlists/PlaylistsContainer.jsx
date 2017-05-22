class PlaylistsContainer extends React.Component {
  getFilteredPlaylists() {
    return this.props.playlists.filter( playlist => {
      return this.isSuperSet(playlist.genres, this.props.selectedGenres)
    })
  }

  isSuperSet(outer, inner) {
    return inner.filter((e,i) => {
      return outer.includes(inner[i])
    }).length === inner.length;
  }

  render() {
    const filtered = (this.props.selectedGenres.length > 0) ? this.getFilteredPlaylists() : this.props.playlists
    const playlists = filtered.map((playlist, i) => {
      return <PlaylistContainer id={ playlist.id }
                                name={ playlist.name }
                                playlistUrl={ playlist.playlist_url }
                                imageUrl={ playlist.image_url }
                                rating={ playlist.rating }
                                key={ i }
                                selectPlaylist={ (e) => this.props.selectPlaylist(e) } />
    });
    return (
      <Playlists playlists={ playlists } />
    )
  }
}

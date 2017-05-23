class PlaylistsContainer extends React.Component {
  getFilteredPlaylists() {
    return this.props.playlists.filter(playlist => {
      let [outer, inner] = [[], []]
      if(this.props.selectedGenres.length){
        [outer, inner] = [playlist.genres, this.props.selectedGenres]
      } else if(this.props.selectedContainArtists.length){
        [outer, inner] = [playlist.artists, this.props.selectedContainArtists]
      }
      return this.isSuperSet(outer, inner)
    })
  }

  isSuperSet(outer, inner) {
    return inner.filter((e,i) => {
      return outer.includes(inner[i])
    }).length === inner.length;
  }

  render() {
    const filtered = (this.props.selectedGenres.length || this.props.selectedContainArtists.length)
      ? this.getFilteredPlaylists()
      : this.props.playlists
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

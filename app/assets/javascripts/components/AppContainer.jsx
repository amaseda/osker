class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playlists: this.props.playlists,
      selectedGenres: [],
      selectedContainArtists: [],
      selectedSimilarArtists: [],
      selectedPlaylist: null
    }
  }

  clearFilters(e){
    this.setState({
      selectedGenres: [],
      selectedContainArtists: [],
      selectedSimilarArtists: []  // Clear filter parameters when switching between filter types
    })
  }

  selectContainArtist(e) {
    artistsArray = e.target.value.split(", ")[0] ? e.target.value.split(", ") : []  // Set back to empty array if only item is empty string
    this.setState({
      selectedContainArtists: artistsArray,
    })
  }

  selectGenre(e) {
    // toggle genre presence in selectedGenres array
    const tempSelectedGenres = this.state.selectedGenres.slice()
    const selectedGenre = e.target.innerText
    if(tempSelectedGenres.includes(selectedGenre)){
      const index = tempSelectedGenres.indexOf(selectedGenre)
      tempSelectedGenres.splice(index, 1)
    } else {
      tempSelectedGenres.push(selectedGenre)
    }
    this.setState({
      selectedGenres: tempSelectedGenres,
    });

    // toggle genre button color
    const genreContainer = e.target.closest(".genre")
    genreContainer.classList.toggle("genre-selected")
  }

  selectPlaylist(e) {
    const selectedId = parseInt(e.target.dataset.id)
    const selectedPlaylist = this.state.playlists.find(playlist => playlist.id === selectedId)
    this.setState({ selectedPlaylist })
  }

  render() {
    // check whether to display playlist list or detail view
    const filtersPlaylistsView = (<div className="filters-playlist-container">
                                    <FiltersContainer clearFilters={ e => this.clearFilters(e) }
                                                      selectGenre={ e => this.selectGenre(e) }
                                                      selectContainArtist={ e => this.selectContainArtist(e) } />
                                    <PlaylistsContainer playlists={ this.state.playlists }
                                                        selectedGenres={ this.state.selectedGenres }
                                                        selectedContainArtists={ this.state.selectedContainArtists }
                                                        selectPlaylist={ e => this.selectPlaylist(e) } />
                                  </div>)
    const playlistDetailView = <PlaylistDetailContainer selectedPlaylist={ this.state.selectedPlaylist }/>
    const playlistDisplay = this.state.selectedPlaylist ? playlistDetailView : filtersPlaylistsView

    return (
      <App playlistDisplay={ playlistDisplay } />
    )
  }
}

AppContainer.propTypes = {
  playlists: React.PropTypes.array
}

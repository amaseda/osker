class PlaylistContainer extends React.Component {
  handleMouseOver(e) {
    const title = e.target.closest(".playlist-title") || e.target.nextSibling;
    title.style.backgroundColor = "#FFD5E0";
    title.style.color = "black";
  }

  handleMouseLeave(e) {
    const title = e.target.closest(".playlist-title") || e.target.nextSibling;
    title.style.backgroundColor = "black";
    title.style.color = "white";
  }

  render() {
    return (
      <Playlist id={ this.props.id }
                imageUrl={ this.props.imageUrl }
                name={ this.props.name }
                handleMouseOver={ e => this.handleMouseOver(e) }
                handleMouseLeave={ e => this.handleMouseLeave(e) }
                selectPlaylist={ e => this.props.selectPlaylist(e) } />
    )
  }
}

PlaylistContainer.propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  playlistUrl: React.PropTypes.string,
  imageUrl: React.PropTypes.string,
  rating: React.PropTypes.number,
  selectPlaylist: React.PropTypes.func
}

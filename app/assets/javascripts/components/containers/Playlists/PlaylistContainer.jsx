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

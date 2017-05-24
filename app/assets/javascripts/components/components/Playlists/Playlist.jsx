const Playlist = (props) => (
  <div className="playlist-container">
    <div className="playlist-image"
          style={{ backgroundImage: `url(${props.imageUrl})` }}
          onMouseEnter={ e => props.handleMouseOver(e) }
          onMouseLeave={ e => props.handleMouseLeave(e) }
          onClick={ e => props.selectPlaylist(e) }
          data-id={ props.id }>
    </div>
    <div className="playlist-title"
          onMouseEnter={ e => props.handleMouseOver(e) }
          onMouseLeave={ e => props.handleMouseLeave(e) }
          onClick={ e => props.selectPlaylist(e) }
          data-id={ props.id }>
      <span>{ props.name }</span>
    </div>
    <PlaylistRatingContainer />
  </div>
)

Playlist.propTypes = {
  id: React.PropTypes.number,
  imageUrl: React.PropTypes.string,
  name: React.PropTypes.string,
  handleMouseOver: React.PropTypes.func,
  handleMouseLeave: React.PropTypes.func,
  selectPlaylist: React.PropTypes.func
}

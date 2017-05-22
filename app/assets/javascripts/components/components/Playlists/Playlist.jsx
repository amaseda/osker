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

const PlaylistRating = (props) => (
  <div className="playlist-rating-container" onMouseLeave={ e => props.removeHighlights(e) }>
    <div className="playlist-rating-unit" data-rated="false" data-index="1" onMouseEnter={ e => props.addHighlights(e)}></div>
    <div className="playlist-rating-unit" data-rated="false" data-index="2" onMouseEnter={ e => props.addHighlights(e)}></div>
    <div className="playlist-rating-unit" data-rated="false" data-index="3" onMouseEnter={ e => props.addHighlights(e)}></div>
    <div className="playlist-rating-unit" data-rated="false" data-index="4" onMouseEnter={ e => props.addHighlights(e)}></div>
    <div className="playlist-rating-unit" data-rated="false" data-index="5" onMouseEnter={ e => props.addHighlights(e)}></div>
  </div>
)
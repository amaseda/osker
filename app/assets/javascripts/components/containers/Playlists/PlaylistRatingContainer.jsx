class PlaylistRatingContainer extends React.Component {
  addHighlights(e) {
    // set all of a playlist's rating units back to gray
    const ratingUnits = e.target.closest(".playlist-rating-container").childNodes;
    ratingUnits.forEach(unit => {
      unit.style.backgroundColor = "#A9A9A9";
    })

    // then highlight the necessary rating units
    const rating = e.target.attributes["data-index"].value;
    for(let i=0; i<rating; i++){
      ratingUnits[i].style.backgroundColor = "#FFD5E0";
    }
  }

  removeHighlights(e) {
    const ratingUnits = e.target.closest(".playlist-rating-container").childNodes;
    ratingUnits.forEach(unit => {
      unit.style.backgroundColor = "#A9A9A9";
    })
  }
  
  render() {
    return (
      <PlaylistRating addHighlights={ e => this.addHighlights(e) }
                      removeHighlights={ e => this.removeHighlights(e) } />
    )
  }
}

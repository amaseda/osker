const Filters = (props) => (
  <div className="filters-container">
    <h2>FILTERS</h2>
    <div className="filters-selections">
      <div className="filter-selector" onClick={ e => props.openSelection(e, "genre") }>
        <span>GENRES</span>
      </div>
      <div className="filter-selector" onClick={ e => props.openSelection(e, "contains-artists") }>
        <span>CONTAINS ARTISTS</span>
      </div>
      <div className="filter-selector" onClick={ e => props.openSelection(e, "similar-artists") }>
        <span>SIMILAR ARTISTS</span>
      </div>
    </div>
    { props.showResults
        ? <FilterResultsContainer filterToShow={ props.filterToShow }
                                  selectGenre={ e => props.selectGenre(e) }
                                  selectContainArtist={ e => props.selectContainArtist(e) } />
        : "" }
  </div>
)

Filters.propTypes = {
  showResults: React.PropTypes.bool,
  filterToShow: React.PropTypes.string,
  openSelection: React.PropTypes.func,
  selectGenre: React.PropTypes.func,
  selectContainArtist: React.PropTypes.func,
}

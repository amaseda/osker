class FiltersContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      showResults: false,
      filterToShow: ""
    }
    this.openSelection = this.openSelection.bind(this)
  }

  openSelection(e, filter) {
    if(this.state.filterToShow === ""){
      this.setState({
        showResults: !this.state.showResults,
        filterToShow: filter
      });
    } else {
      this.props.clearFilters()
      this.setState({
        filterToShow: filter
      })
    }
  }

  render() {
    return (
      <Filters showResults={ this.state.showResults }
               filterToShow={ this.state.filterToShow }
               openSelection={ this.openSelection }
               selectGenre={ e => this.props.selectGenre(e) }
               selectContainArtist={ e => this.props.selectContainArtist(e) } />
    )
  }
}

class FilterResultsContainer extends React.Component {
  render() {
    return (
      <FilterResults filterToShow={ this.props.filterToShow }
                     selectGenre={ e => this.props.selectGenre(e) }
                     selectContainArtist={ e => this.props.selectContainArtist(e) } />
    )
  }
}

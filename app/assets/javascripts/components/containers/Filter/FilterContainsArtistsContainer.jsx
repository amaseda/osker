class FilterContainsArtistsContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <FilterContainsArtists selectContainArtist={ e => this.props.selectContainArtist(e) } />
    )
  }
}

FilterContainsArtistsContainer.propTypes = {
  selectContainArtist: React.PropTypes.func
}

class FilterGenreContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      genres: ["Pop", "Rock", "Electronic", "Folk", "Hip-Hop", "Instrumental"]
    }
  }
  
  render() {
    return (
      <FilterGenre genres={ this.state.genres }
                   selectGenre={ e => this.props.selectGenre(e) } />
    )
  }
}

class PlaylistDetailButtonContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <PlaylistDetailButton name={ this.props.name } cssClass={ this.props.cssClass } />
    )
  }
}

class PlaylistDetailPlayerContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <PlaylistDetailPlayer selectedPlaylist={ this.props.selectedPlaylist } />
    )
  }
}

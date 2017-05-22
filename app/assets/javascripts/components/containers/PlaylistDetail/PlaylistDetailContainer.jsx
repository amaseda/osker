class PlaylistDetailContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <PlaylistDetail selectedPlaylist={ this.props.selectedPlaylist } />
    )
  }
}

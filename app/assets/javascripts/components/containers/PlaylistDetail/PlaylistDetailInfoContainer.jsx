class PlaylistDetailInfoContainer extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <PlaylistDetailInfo selectedPlaylist={ this.props.selectedPlaylist } />
    )
  }
}

PlaylistDetailInfoContainer.propTypes = {
  selectedPlaylist: React.PropTypes.object
}

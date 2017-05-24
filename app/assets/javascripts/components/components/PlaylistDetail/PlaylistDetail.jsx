const PlaylistDetail = props => (
  <div className="playlist-detail-container">
    <div className="playlist-detail-header">
      <span>{ props.selectedPlaylist.name }</span>
    </div>
    <PlaylistDetailButtonsContainer />
    <div className="playlist-detail-content">
      <PlaylistDetailInfoContainer selectedPlaylist={ props.selectedPlaylist } />
      <PlaylistDetailPlayerContainer selectedPlaylist={ props.selectedPlaylist } />
    </div>
  </div>
)

PlaylistDetail.propTypes = {
  selectedPlaylist: React.PropTypes.object
}

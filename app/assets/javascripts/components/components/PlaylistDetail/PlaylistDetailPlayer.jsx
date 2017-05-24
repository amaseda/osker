const PlaylistDetailPlayer = props => (
  <div className="playlist-detail-player-container">
    <iframe src={ `https://open.spotify.com/embed?uri=${props.selectedPlaylist.playlist_url}` } allowTransparency="true"></iframe>
  </div>
)

PlaylistDetailPlayer.propTypes = {
  selectedPlaylist: React.PropTypes.object
}

const Playlists = (props) => (
  <div className="playlists-container">{ props.playlists }</div>
)

Playlists.propTypes = {
  playlists: React.PropTypes.array
}

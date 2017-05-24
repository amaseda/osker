const FilterContainsArtists = (props) => (
  <div className="contain-artists-container">
    <form>
      <input type="text" placeholder="Playlist should contain..."
             onChange={ e => props.selectContainArtist(e) } />
      <button type="submit">ADD</button>
    </form>
  </div>
)

FilterContainsArtists.propTypes = {
  selectContainArtist: React.PropTypes.func
}

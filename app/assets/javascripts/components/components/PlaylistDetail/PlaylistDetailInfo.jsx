const PlaylistDetailInfo = props => {
  const { name, image_url: imageUrl } = props.selectedPlaylist
  return (
    <div className="playlist-detail-info-container">
      <img src={ imageUrl } />
      <p>Eight bit keytar tote bag, plaid waistcoat salvia vaporware vexillologist. Cliche shoreditch microdosing, photo booth banh mi kogi tattooed tacos air plant tbh stumptown polaroid brooklyn vexillologist. Banjo meditation chillwave, hexagon lyft tacos tattooed salvia brunch green juice vegan. </p>
    </div>
  )
}

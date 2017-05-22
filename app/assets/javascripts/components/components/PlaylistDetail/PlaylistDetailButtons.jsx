const PlaylistDetailButtons = props => {
  const leftButtons = props.buttonsContent.left.map((content, i) => {
    return <PlaylistDetailButtonContainer cssClass={ content.cssClass }
                                          name={ content.name }
                                          key={ i } />
  })

  const rightButtons = props.buttonsContent.right.map((content, i) => {
    return <PlaylistDetailButtonContainer cssClass={ content.cssClass }
                                          name={ content.name }
                                          key={ i } />
  })

  return (
    <div className="playlist-detail-buttons-container">
      <div className="playlist-detail-buttons-left">
        { leftButtons }
      </div>
      <div className="playlist-detail-buttons-right">
        { rightButtons }
      </div>
    </div>
  )
}

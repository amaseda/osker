class PlaylistDetailButtonsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonsContent: {
        left: [
          { name: "Like", cssClass: "" },
          { name: "Fav", cssClass: "" },
          { name: "Facebook", cssClass: "" },
          { name: "Twitter", cssClass: "" },
          { name: "Spotify", cssClass: "" }
        ],
        right: [
          { name: "Back", cssClass: "" }
        ]
      }
    }
  }

  render() {
    return (
      <PlaylistDetailButtons buttonsContent={ this.state.buttonsContent } />
    )
  }
}

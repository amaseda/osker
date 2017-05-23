const FilterGenre = (props) => {
  const genres = props.genres.map( (genre, i) => {
    return <div className="genre"
                key={i}
                onClick={ e => props.selectGenre(e) }>
              <span>{ genre }</span>
            </div>
  })
  return (
    <div className="genres-container">
      { genres }
    </div>
  )
}

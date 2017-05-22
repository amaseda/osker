const FilterResults = (props) => {
  let selection = ""
  if(props.filterToShow === "genre"){
    selection = <FilterGenreContainer selectGenre={(e) => props.selectGenre(e)}/>
  } else if(props.filterToShow === "contains-artists"){
    selection = <FilterContainsArtistsContainer />
  } else if(props.filterToShow === "similar-artists"){
    selection = <FilterSimilarArtistsContainer />
  }
  return (
    <div>
      { selection }
    </div>
  )
}
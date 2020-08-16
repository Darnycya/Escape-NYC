import React, {useState, useEffect} from 'react';
import ShowTrails from '../../components/ShowTrails/ShowTrails';
import Search from '../../components/Search/Search'
import { readAllTrails } from '../../services/trails';
import { withRouter } from 'react-router-dom'
 


function SearchResults(props) {


  const [trailState, trailSetState] = useState([])
  let searchQuery = props.match.params.difficulty
  console.log(searchQuery)
  
  const displayTrail = async (e) => {
    

    const get = await readAllTrails()
    let typeResults = get.filter(results => results.type === searchQuery)
    trailSetState(typeResults)
  }

  useEffect(() => {
    displayTrail()
  },[])



  return (

    
   <>
      <Search />
      <ShowTrails component={trailState}/> 
    </>


  )
}

export default withRouter(SearchResults) 
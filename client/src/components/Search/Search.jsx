import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Search.css'





function Search(props) {

  const initialState = {
    trails: [],
    queriedTrails: [],
    inputValue: '',
    type: ''
  }

  const [searchState, searchSetState] = useState(initialState)

  const { trails, queriedProducts, inputValue } = searchState

  const handleChange = (e) => {
    searchSetState({ ...searchState, [e.target.name]: e.target.value })
    }
    
 

  const handleSubmit = () => {
    if (inputValue !== '') {
      return props.history.push(`/trails/${inputValue.toLowerCase()}`)
    } else {
      return props.history.push(`/trails/`)
    }
  }

  return (

     
    
        <div class ="search">
        <form class="search-bar" onSubmit={handleSubmit}>
          <input
          className="search-input"
            value={inputValue}
            onChange={handleChange}
            name="inputValue"
            placeholder="Search easy, moderate or hard.."
            type="text"
            autoFocus
        />
        <img type="submit" value="search" class="mag" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGACFFrgDLSNRkZ3yBsvvAotZU3eYiATXIMg&usqp=CAU" />
      </form>
      </div>
       
     
       
    )
  }




  export default withRouter(Search)
import React, { useState, useEffect } from 'react'
import { readOneTrail } from '../../services/trails'
import Comments from '../Comments/Comments'
import './TrailDetail.css'



export default function TrailDetail(props) {
  const [trail, setTrail] = useState(null)

  useEffect(() => {
    getTrailDetail()
  }, [])



  const getTrailDetail = async () => {
    const trailDetail = await readOneTrail(props.match.params.id)
    setTrail(trailDetail)
  }
  
  
  return (
    <div class="details">
      {trail && ( 
        <>
        <h4>{trail.name}</h4>
        <img class="trail_image_big" src={trail.trail_image}></img>
          <p>{trail.name}</p>
          <p>{trail.difficulty}</p>
          <p>{trail.travel_time_from_NYC} minutes</p>
          </>
      )} 
      <button>Update Trail</button> 
      <button>Delete Trail</button> 
    </div>
    
  )
}

// {trail && ( 
//   <>
//   <h3>{trail.name}</h3>
//   <img class="trail_image_big" src={trail.trail_image}></img>
//     <p>{trail.name}</p>
//     <p>{trail.difficulty}</p>
//     <p>{trail.travel_time_from_NYC} minutes</p>
//     </>
// )}
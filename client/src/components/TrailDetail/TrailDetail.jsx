import React, { useState, useEffect } from 'react'
import { readOneTrail } from '../../services/trails'
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
    <div>
      {trail && ( 
        <>
        <h4>{trail.name}</h4>
          <div class='left'>
            <img class="trail_image_big" src={trail.trail_image}></img></div>
          <div class="right">
          <p class="info2"><b>Created by:</b> User Avatar and Name</p>
            <p class="info2"><b>Difficulty:</b> {trail.difficulty}</p>
            <p class="info2"><b>Length (from top to bottom):</b> {trail.length} miles</p>
            <p class="info2"><b>Travel Time From NYC:</b> {trail.travel_time_from_NYC} minutes</p>
            <button className="update-button">Update Trail</button> 
            <button className="delete-button">Delete Trail</button> </div>
            
        </>
        
      )} 
    </div>
    
    
    
  )
}

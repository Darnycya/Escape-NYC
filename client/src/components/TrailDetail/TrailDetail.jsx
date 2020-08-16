import React, { useState, useEffect } from 'react'
import { readOneTrail } from '../../services/trails'



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
        <h3>{trail.name}</h3>
        <img class="trail_image_big" src={trail.trail_image}></img>
          <p>{trail.name}</p>
          <p>{trail.difficulty}</p>
          <p>{trail.travel_time_from_NYC} minutes</p>
          </>
      )}
      <button>Update Trail</button> 
      <button>Delete Trail</button> 
      <h3>Comments:</h3>
      {props.comments.map((comment) => (
        <div class="comments">
          
          <img class="user_image" src={comment.user_id.user_image}></img>
          <p>{comment.user_id.name}</p>
            <p>{comment.comment}</p>
        </div>
      ))
      }
      <input type="text"></input><button>Add A Comment </button>
      
    </div>
    
  )
}

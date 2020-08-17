import React, { useState, useEffect } from 'react'
import { readOneTrail } from '../../services/trails'
import { Link } from 'react-router-dom'
import { destroyTrail} from '../../services/trails'
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
  
  const handleClick = async (id) => {
    await destroyTrail(id);
    props.setTrails(props.trails.filter((trail) => {
      return trail.id !== id
    }))
  }
  
  return (
    <div class="trailDetail-page">
    
      {trail && ( 
        <>
        <h4>{trail.name}</h4>
          <div class='left'>
            <img class="trail_image_big" src={trail.trail_image}></img></div>
          <div class="right">
          <p class="info2"><b>Created by:</b><img class="user_image" src="https://pbs.twimg.com/media/DjburCIUUAIDrXt.jpg"></img>   User Name</p>
            <p class="info2"><b>Difficulty:</b> {trail.difficulty}</p>
            <p class="info2"><b>Length (from top to bottom):</b> {trail.length} miles</p>
            <p class="info2"><b>Travel Time From NYC:</b> {trail.travel_time_from_NYC} minutes</p>
            <Link to='/trails/:id/update'><button className="update-button">Update Trail</button></Link>
            <Link to='/trails'><button onClick={() => handleClick(trail.id)} className="delete-button">Delete Trail</button></Link> </div>
            <div class="comment-header">
      <p class="comments-header">Comments:</p>
      {props.comments.map((comment) => (
        <div class="comment-box">
          <img class="user_image" src="https://pbs.twimg.com/media/DjburCIUUAIDrXt.jpg"></img>
          <p><b>User Name: </b></p>
            <p>{comment.comment}</p>
        </div>
      ))
      }
      <input class="comment-here" type="text"></input><button>Add A Comment </button>
      </div>
        </>
        
        
      )} 
  
    </div>
    
    
    
    
  )
}


// <img class="user_image" src={comment.user_id.user_image}></img>
//           <p>{comment.user_id.name}</p>
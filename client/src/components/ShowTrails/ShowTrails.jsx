import React from 'react'
import { Link } from 'react-router-dom'
import './ShowTrails.css'
import Search from '../Search/Search'


export default function ShowTrails(props) {
  return (
    <>
    
      <div className="card-containers">
      <Search />
      <h3 class="trail-header">Trails</h3>
      {props.trails.map((trail) => (
        <div class="card">
          <div class="circles">
            <Link to={`/trails/${trail.id}`} key={trail.id}><img class="trail_image" src={trail.trail_image}></img></Link>
          <p class="text-name">{trail.name}</p>
          </div>
          </div>
      ))
      }
      
       
      </div>
      <Link to='/new-trail'><button class="new-trail"><p class="new-trail-text">Create A Trail</p></button></Link>
      </>
  )
}


// <div>
//       <h3>Trails</h3>
//       {props.trails.map((trail) => (
//         <div class="card">
//           <ul>
//             <Link to={`/trails/${trail.id}`} key={trail.id}><img class="trail_image" src={trail.trail_image}></img></Link>
//           <p>{trail.name}</p>
//           <p>{trail.difficulty}</p>
//           <p>{trail.travel_time_from_NYC} minutes</p>
//           </ul>
//         </div>
//       ))
//       }
//       <Link to='/new-trail'><button>Create A Trail</button></Link>
       
//       </div>
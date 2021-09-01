import React, { useState, useEffect } from 'react';
import { getTrail, deleteTrail } from '../../services/trails';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './TrailDetail.css';

const TrailDetail = (props) => {

  const [trail, setTrail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchTrail = async () => {
        const trail = await getTrail(id)
        setTrail(trail)
        
    }
    fetchTrail()
}, [id])

 

  return (
<>
    <div className="trail-detail-container">
      {trail !== null &&
        <>
      <div className="trail-image-detail">
        <img src={trail.trailUrl} alt={trail.name}></img>
      </div>
      <div className="trail-detail-description">
        <h3>Name:</h3>{trail.name}<br />
        <h3>Difficulty:</h3>{trail.difficulty}<br />
        <h3>Distance From NYC:</h3>{trail.distanceFromNyc} miles<br />
        <h3>Time To Climb:</h3>{trail.climbingTime} hours<br />
        <h3>Rating:</h3>{trail.rating}<br />
        </div>
        </>
      }
      
    </div>
    <button className="edit-button">Edit Trail</button>
    <Link className="delete-link" to={`/trails`}><button className="delete-button" onClick={() => deleteTrail(trail._id)}>Delete Trail</button></Link>
    </>
  )
}

export default TrailDetail
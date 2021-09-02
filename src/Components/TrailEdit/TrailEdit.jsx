import React, { useState, useEffect } from 'react';
import { getTrail, updateTrail } from '../../services/trails';
import { useParams, Redirect } from 'react-router-dom';
import './TrailEdit.css';


const TrailEdit = (props) => {

  const [trail, setTrail] = useState({
    name: '',
    trailUrl: '',
    difficulty: '',
    distanceFromNyc: '',
    climbingTime: '',
    rating: ''
  })
  
  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams();

  useEffect(() => {
    const fetchTrail = async () => {
        const trail = await getTrail(id)
        setTrail(trail)
    }
    fetchTrail()
  }, [id])
  

  const handleChange = (event) => {
    const { name, value } = event.target
    setTrail({
            ...trail,
            [name]: value
    })
}
  

const handleSubmit = async (event) => {
  event.preventDefault()
  let { id } = props.match.params
  const updated = await updateTrail(id, trail)
  setUpdated(updated)
}
  
  if (isUpdated) {
    return <Redirect to={`/trails/${props.match.params.id}`} />
  } else {
    console.log('Something went wrong girl')
}

  
  return (
    <div className="create-trail-container">
     <form className="create-trail-form" autoComplete="off" onSubmit={handleSubmit}>
        <p className="fake-labels"><b>Update {trail.name}</b></p><br />
        <input
          className="create-trail-input"
          placeholder="Name"
          value={trail.name}
          name='name'
          required
          autoFocus
          onChange={handleChange}
        /><br />
         <input
          className="create-trail-input"
          placeholder='Image URL'
          value={trail.trailUrl}
          name='trailUrl'
          required
          onChange={handleChange}
        /><br />
        <input
          className="create-trail-input"
          type="number"
          placeholder="Distance From NYC(miles)"
          value={parseInt(trail.distanceFromNyc)}
          name='distanceFromNyc'
          required
          onChange={handleChange}
        /><br />
        <input
          className="create-trail-input"
          type="number"
          placeholder="Time to Climb(hours)"
          value={trail.climbingTime}
          name='climbingTime'
          required
          onChange={handleChange}
        /><br />
      <label className="rating-label" htmlFor="rating">Choose a rating:</label>
        <select
          name="rating"
          id="rating"
          value={trail.rating}
          required
          onChange={handleChange}>
          <option value="1">1 Star</option>
          <option value="2">2 Star</option>
          <option value="3">3 Star</option>
          <option value="4">4 Star</option>
          <option value='5'>5 Star</option>
        </select><br />
      <label className="level-label" htmlFor="level">Choose a difficulty:</label>
        <select
          name="difficulty"
          id="difficulty"
          value={trail.difficulty}
          required
          onChange={handleChange}>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
         <option value="Hard">Hard</option>
        </select>
        <button
          className="submit-button"
          type='submit'>Save
        </button>
      </form>
    </div>
  )
}

export default TrailEdit

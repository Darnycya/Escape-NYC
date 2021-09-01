import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { createTrail } from '../../services/trails';
import './CreateTrail.css';

const CreateTrail = (props) => {

  const [trail, setTrail] = useState({
    name: '',
    trailUrl: '',
    difficulty: 0,
    distanceFromNyc: 0,
    climbingTime: 0,
    rating: 0
  })
  
  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    console.log(name, value)
    setTrail({
            ...trail,
            [name]: value
    })
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createTrail(trail)
    setCreated({ created })
  }
  
  if (isCreated) {
    return <Redirect to={`/trails`} />
  } else {
    console.log('Something went wrong girl')
}

  console.log({ ...trail })
  return (
    <div className="create-trail-container">
     <form className="create-trail-form" autoComplete="off" onSubmit={handleSubmit}>
        <p className="fake-labels"><b>Create A Trail:</b></p><br />
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
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
         <option value="hard">Hard</option>
        </select>
        <button
          className="submit-button"
          type='submit'>Submit
        </button>
        </form> 
    </div>
  )
}

export default CreateTrail

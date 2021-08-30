import React from 'react';
import './CreateTrail.css';

export default function CreateTrail() {
  return (
    <div className="create-trail-container">
     <form className="create-trail-form">
        <p className="fake-labels"><b>Create A Trail:</b></p><br />
        <input className="create-trail-input" placeholder="Name"></input><br />
          <input className="create-trail-input" type="number"  placeholder="Distance From NYC(miles)"></input><br />
          <input className="create-trail-input" type="number" placeholder="Time to Climb(hours)"></input><br />
          <label className="rating-label" for="rating">Choose a rating:</label>
        <select name="rating" id="rating">
  <option value="1-star">1 Star</option>
  <option value="2-star">2 Star</option>
  <option value="3-star">3 Star</option>
          <option value="4-star">4 Star</option>
          <option value="5-star">5 Star</option>
</select><br />
        <label className="level-label" for="level">Choose a level:</label>
        <select name="level" id="level">
  <option value="easy">Easy</option>
  <option value="medium">Medium</option>
  <option value="hard">Hard</option>
</select>
          <button className="submit-button">Submit</button>
        </form> 
    </div>
  )
}

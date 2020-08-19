import React, { useState } from 'react';
import { postTrail } from '../../services/trails'
import './CreateTrail.css'


export default function CreateTrail(props) {
  const [formData, setFormData] = useState({
    name: "",
    difficulty: "",
    travel_time_from_NYC: "",
    length: "",
    trail_image: "",

  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
}

const handleSubmit = async (e) => {
  e.preventDefault();
  const {id} = props.match.params;
    const newTrail = await postTrail(props.currentUser.id, formData);
    props.setTrails([
      ...props.trails,
      newTrail
    ])
    props.history.push('/trails');
  }






  return (
    <div class="create-trail"><form onSubmit={handleSubmit}>
      <h3>Create A Trail</h3>
      <label>
        Name:
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      </label>
      <label>
        Difficulty:
      <input
        type="text"
        name="difficulty"
        value={formData.difficulty}
        onChange={handleChange}
      />
      </label>
    <label>
      Travel Time:
      <input
        type="number"
        name="travel_time_from_NYC"
        value={formData.travel_time_from_NYC}
        onChange={handleChange}
      />
      </label>
      <label>
        Length:
      <input
        type="number"
        name="length"
        value={formData.length}
        onChange={handleChange}
      />
      </label>
      <label>
        Trail Image:
      <input
        type="url"
        name="trail_image"
        value={formData.trail_image}
        onChange={handleChange}
      />
      </label>
      <button class="submit-button-CT">Submit</button>
    </form>
    </div>
  )
}





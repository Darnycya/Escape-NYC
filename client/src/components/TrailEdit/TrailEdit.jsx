import React, { useState, useEffect } from 'react'
import { putTrail } from '../../services/trails'
import { Link } from 'react-router-dom'

export default function TrailEdit(props) {
  const [formData, setFormData] = useState({
    name: "",
    difficulty: "",
    travel_time_from_NYC: "",
    length: "",
    trail_image: "",
  })

  useEffect(() => {
    defaultFormData()
  }, [props.trails])

  const defaultFormData = () => {

    const trailItem = props.trails.find((trail) => {
      return trail.id === parseInt(props.match.params.id)
    })
    if (trailItem) {
      setFormData({
        name: trailItem.name,
        difficulty: trailItem.difficulty,
        travel_time_from_NYC: trailItem.travel_time_from_NYC,
        length: trailItem.length,
        trail_image: trailItem.trail_image,
        
      })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData,
      [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {id} = props.match.params;
    const newTrail = await putTrail(id, formData);
    props.setTrails(
      props.trails.map((trailItem) => {
        return trailItem.id === parseInt(id) ? newTrail : trailItem
      })
    )
    props.history.push('/trails')
  }

  return (
    <form class="login" onSubmit={handleSubmit}>
      <h3>Edit Trail</h3>
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
      Travel Time From NYC:
      <input
        type="number"
        name="travel_time_from_NYC"
        value={formData.travel_time_from_NYC}
        onChange={handleChange}
      />
      </label>
      <label>
        Length Of Trail:
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
      <button class="edit-trail-button">Submit</button>
    </form>
  )
}

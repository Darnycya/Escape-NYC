# Escape NYC

<p align="center">
  <img src="https://res.cloudinary.com/darnycya/image/upload/v1690413810/ezgif-5-a568b15f58_brzevp.gif"></img>
  </p>
  
Escape NYC is a full CRUD React app that allows users to submit hiking trails that they have found to help encourage New Yorkers to leave the city and get some fresh air during quarantine. The API that is being edited on the application is: <a target="_blank" rel="noopener" href="https://github.com/Darnycya/escape-nyc-api">here</a>.


## Link To Escape NYC

<a target="_blank" rel="noopener" href="https://escape-nyc-app.netlify.app/">Click Here</a>

## Sample of API 

```
{
      "name": "Anthony's Nose",
      "trailUrl": "https://hikethehudsonvalley.com/wp-content/uploads/2015/05/Spring2014_RWAN_955.jpg",
      "difficulty": "Medium",
      "distanceFromNyc": 40,
      "climbingTime": 2.5,
      "rating": 4
    }
```

## Sample of the CRUD Frunctionality

```
import axios from 'axios'

const apiUrl = `https://escape-nyc-api-0c842ac3c094.herokuapp.com`

export const getTrails = async () => {
  try {
    const response = await axios(`${apiUrl}/trails`)
    const trails = response.data
    return trails
  } catch (error) {
    throw error
  }
}

export const getTrail = async id => {
  try {
    const response = await axios(`${apiUrl}/trails/${id}`)
    const trail = response.data
    return trail
  } catch (error) {
    throw error
  }
}

export const createTrail = async trail => {
  try {
    const response = await axios.post(`${apiUrl}/trails`, trail)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateTrail = async (id, trail) => {
  try {
    const response = await axios.put(`${apiUrl}/trails/${id}`, trail)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteTrail = async id => {
  try {
    const response = await axios.delete(`${apiUrl}/trails/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}
```
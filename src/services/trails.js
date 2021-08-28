import axios from 'axios'

const apiUrl = `https://escape-nyc-api.herokuapp.com/trails`

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

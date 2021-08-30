import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Search from '../../Components/Search/Search';
import TrailList from '../../Components/TrailList/TrailList';
import { getTrails } from '../../services/trails';
import './Trails.css';

const Trails = (props) => {
  const [allTrails, setAllTrails] = useState([])
  const [queriedTrails, setQueriedTrails] = useState([])

 

  useEffect(() => {
    const fetchTrails = async () => {
      const trails = await getTrails()
      setAllTrails(trails)
      setQueriedTrails(trails)
 
    }
    fetchTrails()
  }, [])

  const handleSearch = event => {
    const newQueriedTrails = allTrails.filter(trail => trail.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setQueriedTrails(newQueriedTrails)
  }

  const handleSubmit = event => event.preventDefault()

  const trailsJSX = queriedTrails.map((trail, index) =>
  <TrailList _id={trail._id} name={trail.name} trailUrl={trail.trailUrl} difficulty={trail.difficulty} distanceFromNyc={trail.distanceFromNyc} climbingTime={trail.climbingTime} rating={trail.rating} key={index} />
  )



  return (
    <>
       <div className="top-container">
       <Search onSubmit={handleSubmit} onChange={handleSearch} />
      </div>

      <div className="trails">
         {trailsJSX}
      </div>
    </>
  )
}

export default Trails
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../Components/Search/Search';
import TrailList from '../../Components/TrailList/TrailList';
import { getTrails } from '../../services/trails';
import './Trails.css';

const Trails = (props) => {
  const [allTrails, setAllTrails] = useState([])
  const [queriedTrails, setQueriedTrails] = useState([])
  const [isLoaded, setLoaded] = useState(false)

 

  useEffect(() => {
    const fetchTrails = async () => {
      const trails = await getTrails()
      setAllTrails(trails)
      setQueriedTrails(trails)
      setLoaded(true)
 
    }
    fetchTrails()
  }, [])

  if (!isLoaded) {
    return <div className="loading-div"><img alt="spinner" className="spinner" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a36e39ed-2182-4fa3-af43-299e3d89d2de/db8jbxg-51f41c0c-b7ed-48f6-9128-3e5e701bfd88.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EzNmUzOWVkLTIxODItNGZhMy1hZjQzLTI5OWUzZDg5ZDJkZVwvZGI4amJ4Zy01MWY0MWMwYy1iN2VkLTQ4ZjYtOTEyOC0zZTVlNzAxYmZkODguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XDGFAM5d5ZD20e_6JEQQrAkqOFwIwIhaTsxn4Uymnxk"></img>
    <h1 className="loading-text">Loading...</h1></div>
}

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

      <Link to="/create-trail"><button className="create-trail">Create A Trail</button></Link>
    </>
  )
}

export default Trails
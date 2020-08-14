import React from 'react'
import Slideshow from '../../components/Slideshow/Slideshow'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      
      <Slideshow />
      <Link to='/trails/'><button>Enter</button></Link>
    </div>
  )
}

import React from 'react'
import Slideshow from '../../components/Slideshow/Slideshow'
import { Link } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
  return (
    
    <body className="body-homepage">
    <div className="home-wrap">
      <h3 class="glow">Escape NYC</h3>
      <div class="info"><h2>The concrete jungle, NYC, is argumentatively the greatest city on Earth. But the grass is greener and more prominent on the other side...of the bridges. Mountains and trails await you and Escape NYC will help guide you to the perfect one for you.</h2></div>
       
      
      <Link to='/login'><button class ="enter"><p class="enter-button">Enter</p></button></Link>
      </div>
      </body>
    
  )
}

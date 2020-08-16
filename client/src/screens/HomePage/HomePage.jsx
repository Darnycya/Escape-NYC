import React from 'react'
import Slideshow from '../../components/Slideshow/Slideshow'
import { Link } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
  return (
    <div>
      <div class="info"><h2>The concrete jungle, NYC, is argumentavly the greatest city on Earth. But the grass is greener and more prominent on the other side...of the bridges. Moutains and plains await you and Escape NYC will help guide you to the best one for you. With Escape NYC you will be able to search through different.</h2></div>
       
      <div class="slide"><Slideshow /></div>
      <Link to='/trails/'><button class ="enter">Enter</button></Link>
    </div>
  )
}

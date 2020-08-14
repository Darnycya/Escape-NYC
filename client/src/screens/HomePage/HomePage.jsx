import React from 'react'
import Slideshow from '../../components/Slideshow/Slideshow'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      The concrete jungle, NYC, is argumentavly the greatest city on Earth. But the grass is greener and more prominent on the other side...of the bridges. Moutains and plains await you and Escape NYC will help guide you to the best one for you. With Escape NYC you will be able to search through different.
       
      <Slideshow />
      <Link to='/trails/'><button>Enter</button></Link>
    </div>
  )
}

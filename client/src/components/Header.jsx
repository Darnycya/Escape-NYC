import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1>Escape NYC</h1>
      <Link to='/login'>Login/Register</Link>
      
    </header>
  )
}

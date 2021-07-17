import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="navbar">
      <Link className="escape-logo" to="/"><img className="logo" src="https://res.cloudinary.com/darnycya/image/upload/v1620845608/EscapeNYClogo_cppudw.jpg"></img></Link>
      
      <div className="nav-links">
        <Link to="/about-us" className="link">About Us</Link>
        <Link to="/trails" className="link">Trails</Link>
      </div>
      
      <div className="nav-login">
      <Link to="/login-in" className="link">Login In</Link> |
      <Link to="/sign-up" className="link">Sign Up</Link>
      </div>

    </div>
  )
}

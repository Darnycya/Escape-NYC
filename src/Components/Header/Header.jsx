import React from 'react';
import './Header.css'

export default function Layout() {
  return (
    <div className="navbar">
      <img className="logo" src="https://res.cloudinary.com/darnycya/image/upload/v1620845608/EscapeNYClogo_cppudw.jpg"></img>
      
      <div className="nav-links">
        <a>About Us</a>
        <a>Trails</a>
      </div>
      
      <div className="nav-login">
      <a>Login In</a> |
      <a>Sign Up</a>
      </div>

    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <header>
      <h1>Escape NYC</h1>
      {
        props.currentUser ? (
          <>
            <img src={props.currentUser.user_image}/>
            <button>Logout</button>
          </>
        ) : (
            <Link to='/login'>Login/Register</Link>
)
      }
      
      
    </header>
  )
}

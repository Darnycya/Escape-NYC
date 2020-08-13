import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { removeToken } from '../../services/auth';
import { useHistory } from 'react-router-dom'

export default function Header(props) {
  const history = useHistory();

  const handleLogout = () => {
    props.setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push('/')

  }


  return (
    <header>
      <h1>Escape NYC</h1>
      {
        props.currentUser ? (
          <>
            <img src={props.currentUser.user_image}/>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
            <Link to='/login'>Login/Register</Link>
)
      }
      
      
    </header>
  )
}

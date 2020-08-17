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
      <Link class='logo-link' to='/trails'><h1>Escape NYC</h1></Link>
      {
        props.currentUser ? (
          <>
            <img class ="avatar" src={props.currentUser.user_image}/>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
            <Link to='/login'>Login/Register</Link>
)
      }

      {
        props.currentUser && (
          <>
            {/* At 03:00 he starts talking about how to show certain things when logged in. */}
            </>
        )
      }
      
      
    </header>
  )
}

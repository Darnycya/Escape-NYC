import React from 'react';
import './LogIn.css';

export default function Login() {
  return (
    <div className="form-container">
      <form className="login-form">
      Log In:<br/>
          <input className="login" placeholder="Username"></input><br/>
          <input className="login" placeholder="Password"></input><br />
        <button>Log In</button><br/>
        Forgot your password?<br />
        Forgot your username?<br/>
        </form>
      <form className="signup-form">
      Sign Up:<br/>
          <input className="signup" placeholder="First Name"></input>
          <input className="signup" placeholder="Last Name"></input><br />
          <input className="signup" placeholder="Username"></input><br />
          Username can only contain letters and numbers.<br />
          <input className="signup" placeholder="Password"></input>
          <input className="signup" placeholder="Confirm Password"></input><br />
          Password should contain more than 6 letters.<br />
          <button>Submit</button>
        </form>
     </div> 
  )
}


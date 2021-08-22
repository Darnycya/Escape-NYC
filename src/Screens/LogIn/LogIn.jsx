import React from 'react';
import './LogIn.css';

export default function Login() {
  return (
    <div className="form-container">
      <form className="login-form">
      <p className="fake-labels"><b>Log In:</b></p><br/>
          <input className="login" placeholder="Username"></input><br/>
          <input className="login" placeholder="Password"></input><br />
        <button className="login-button">Log In</button><br/>
        <p className="fake-labels">Forgot your password?</p><br />
        <p className="fake-labels">Forgot your username?</p><br/>
        </form>
      <form className="signup-form">
      <p className="fake-labels"><b>Sign Up:</b></p><br/>
          <input className="signup" placeholder="First Name"></input>
          <input className="signup" placeholder="Last Name"></input><br />
          <input className="signup" placeholder="Username"></input><br />
          <p className="fake-labels">Username can only contain letters and numbers.</p><br />
          <input className="signup" placeholder="Password"></input>
          <input className="signup" placeholder="Confirm Password"></input><br />
          <p className="fake-labels">Password should contain more than 6 letters.</p><br />
          <button className="submit-button">Submit</button>
        </form>
     </div> 
  )
}


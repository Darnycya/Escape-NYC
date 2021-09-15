import React, { useState, useEffect } from 'react';
import useForm from "./useForm";
import validate from "./validateInfo"
import './LogIn.css';

export default function Login() {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);
  


  return (
    <div className="form-container">
      <form className="login-form">
      <p className="fake-labels"><b>Log In:</b></p><br/>
        <input className="login"
          id="username"
          type="text"
          name="username"
          placeholder="Username"
        /><br />
        <input className="login"
          id="password"
          type="text"
          name="password"
          placeholder="Password"
        /><br />
        <button className="login-button">Log In</button><br />
        <p className="fake-labels">Forgot your password?</p><br />
        <p className="fake-labels">Forgot your username?</p><br/>
      </form>
      
      <form className="signup-form" onSubmit={handleSubmit}>
      <p className="fake-labels"><b>Sign Up:</b></p><br/>
        <input className="signup"
          placeholder="First Name"
          id="firstname"
          type="text"
          name="firstname"
          value={values.firstname}
          onChange={handleChange}
        />
        {errors.firstname && <p>{errors.firstname}</p>}
        <input className="signup"
          placeholder="Last Name"
          id="lastname"
          type="text"
          name="lastname"
          value={values.lastname}
          onChange={handleChange}
        /><br />
        {errors.lastname && <p>{errors.lastname}</p>}
        <input className="signup"
          placeholder="Username"
          id="username"
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
        /><br />
        {errors.username && <p>{errors.username}</p>}
          <p className="fake-labels">Username can only contain letters and numbers.</p><br />
        <input className="signup"
          placeholder="Password"
          id="password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
        <input className="signup"
          placeholder="Confirm Password"
          id="password2"
          type="password"
          name="password2"
          value={values.password2}
          onChange={handleChange}
        /><br />
        {errors.password2 && <p>{errors.password2}</p>}
          <p className="fake-labels">Password should contain more than 6 letters.</p><br />
          <button className="submit-button">Submit</button>
        </form>
     </div> 
  )
}


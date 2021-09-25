import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';

export default function Login(submitForm, callback) {

  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validateInfo(values));
    setIsSubmitting(true);
  };

  // useEffect(
  //   () => {
  //     if (Object.keys(errors).length === 0 && isSubmitting) {
  //       callback();
  //     }
  //   },
  //   [errors]
  // );


  function validateInfo(values) {
    let errors = {}
  
    if (!values.firstname.trim()) {
      errors.firstname = "First name required"
    }
  
    if (!values.lastname.trim()) {
      errors.lastname = "Last name required"
    }
  
    if (!values.username.trim()) {
      errors.username = "Username required"
    }
  
    if (!values.password) {
      errors.password = "Password is required"
    } else if (values.password.length < 6) {
      errors.password = "Password needs to be 6 character or more"
    }
  
    if (!values.password2) {
      errors.password2 = "Password is required"
    } else if (values.password2 !== values.password) {
      errors.password2 = "Password do not match"
    }
  
    return errors
  }


  return (
  <>
    {!isSubmitted ? (
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
        <Link to="/trails"><button className="login-button">Log In</button><br /></Link>
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
          <Link to="/trails"><button className="submit-button">Submit</button></Link>
        </form>
        </div>
         ) : (
          <div className="signup-form">You successfully signed up. </div>
        )}
      </>
  )
}


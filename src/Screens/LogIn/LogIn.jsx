import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './LogIn.css';

export default function Login() {
  const [values, setValues] = useState({
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    firstTimeUsername: '',
    firstTimePassword: '',
    firstTimePassword2: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loginMessage, setLoginMessage] = useState(''); // New state for messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    setLoginMessage(''); // Clear message on input change
  };

  const handleSignUp = (e) => {
    e.preventDefault();
  
    // Validate input fields
    const validationErrors = validateInfo(values);
  
    // Check if the username already exists
    const usernameExists = localStorage.getItem(values.firstTimeUsername);
    if (usernameExists) {
      validationErrors.firstTimeUsername = 'Username already exists. Please choose another.';
    }
  
    if (Object.keys(validationErrors).length === 0) {
      // Save to localStorage if validation passes
      localStorage.setItem(
        values.firstTimeUsername,
        JSON.stringify({
          firstname: values.firstname,
          lastname: values.lastname,
          password: values.firstTimePassword
        })
      );
      setIsSubmitted(true);
      setLoginMessage('Sign up successful! Please log in.');
    } else {
      setErrors(validationErrors);
      setLoginMessage(''); // Clear any success message if there are errors
    }
  };
  

  const handleSignIn = (e) => {
    e.preventDefault();
    const storedUser = localStorage.getItem(values.username);
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      if (userData.password === values.password) {
        setIsSignedIn(true);
      } else {
        setLoginMessage('Incorrect password.');
      }
    } else {
      setLoginMessage('Username not found.');
    }
  };

  if (isSignedIn) {
    return <Redirect to={`/trails`} />;
  }

  function validateInfo(values) {
    let errors = {};
    if (!values.firstname.trim()) {
      errors.firstname = 'First name required';
    }
    if (!values.lastname.trim()) {
      errors.lastname = 'Last name required';
    }
    if (!values.firstTimeUsername.trim()) {
      errors.firstTimeUsername = 'Username required';
    }
    if (!values.firstTimePassword) {
      errors.firstTimePassword = 'Password is required';
    } else if (values.firstTimePassword.length < 6) {
      errors.firstTimePassword = 'Password needs to be 6 characters or more';
    }
    if (values.firstTimePassword2 !== values.firstTimePassword) {
      errors.firstTimePassword2 = 'Passwords do not match';
    }
    return errors;
  }

  return (
    <>
      <div className="form-container">
        <form className="login-form" onSubmit={handleSignIn}>
          <p className="fake-labels">
            <b>Log In:</b>
          </p>
          <br />
          <input
            className="login"
            required
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
          />
          <br />
          <input
            className="login"
            required
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
          <br />
          <button className="login-button">Log In</button>
          <br />
          {loginMessage && <p className="login-errors">{loginMessage}</p>} {/* Display login messages */}
          <p className="fake-labels">Forgot your password?</p>
          <br />
          <p className="fake-labels">Forgot your username?</p>
          <br />
        </form>

        {!isSubmitted ? (
          <form className="signup-form" onSubmit={handleSignUp}>
            <p className="fake-labels">
              <b>Sign Up:</b>
            </p>
            <br />
            <input
              className="signup"
              required
              placeholder="First Name"
              id="firstname"
              type="text"
              name="firstname"
              value={values.firstname}
              onChange={handleChange}
            />
            <input
              className="signup"
              required
              placeholder="Last Name"
              id="lastname"
              type="text"
              name="lastname"
              value={values.lastname}
              onChange={handleChange}
            />
            <br />
            <input
              className="signup"
              required
              placeholder="Username"
              id="firstTimeUsername"
              type="text"
              name="firstTimeUsername"
              value={values.firstTimeUsername}
              onChange={handleChange}
            />
            <br />
            <p className="fake-labels">Username can only contain letters and numbers.</p>
            <br />
            <input
              className="signup"
              required
              placeholder="Password"
              id="firstTimePassword"
              type="password"
              name="firstTimePassword"
              value={values.firstTimePassword}
              onChange={handleChange}
            />
            <input
              className="signup"
              required
              placeholder="Confirm Password"
              id="firstTimePassword2"
              type="password"
              name="firstTimePassword2"
              value={values.firstTimePassword2}
              onChange={handleChange}
            />
            <br />
            <p className="fake-labels">Password should contain more than 6 letters.</p>
            <br />
            <button className="submit-button">Submit</button>
            <div className="errors-container">
              {errors.firstname && <p className="errors">*{errors.firstname}</p>}
              {errors.lastname && <p className="errors">*{errors.lastname}</p>}
              {errors.firstTimeUsername && <p className="errors">*{errors.firstTimeUsername}</p>}
              {errors.firstTimePassword && <p className="errors">*{errors.firstTimePassword}</p>}
              {errors.firstTimePassword2 && <p className="errors">*{errors.firstTimePassword2}</p>}
            </div>
          </form>
        ) : (
          <div className="signup-form">Sign up successful. Please log in.</div>
        )}
      </div>
    </>
  );
}

import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Screens/HomePage/HomePage';
import LogIn from './Screens/LogIn/LogIn';
import AboutUs from './Screens/AboutUs/AboutUs';
import Trails from './Screens/Trails/Trails';
import Profile from './Screens/Profile/Profile'
import './App.css';

function App() {



  return (
    <>
      <Route path="/" component={Header} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login-in" component={LogIn} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/trails" component={Trails} />
      <Route exact path="/profile" component={Profile} />
      <Route path="/" component={Footer} />
      
      </>
      
      
  );
}

export default App;

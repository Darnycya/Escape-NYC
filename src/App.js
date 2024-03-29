import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Screens/HomePage/HomePage';
import LogIn from './Screens/LogIn/LogIn';
import Trails from './Screens/Trails/Trails';
import Profile from './Screens/Profile/Profile';
import CreateTrail from './Components/CreateTrail/CreateTrail';
import TrailDetail from './Components/TrailDetail/TrailDetail';
import TrailEdit from './Components/TrailEdit/TrailEdit';

import './App.css';

const App = () => {

  return (
    <>
      <Route path="/" component={Header} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login-in" component={LogIn} />
      <Route exact path="/trails" component={Trails} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/create-trail" component={CreateTrail} />
      <Route exact path="/trails/:id" component={TrailDetail} />
      <Route exact path="/trails/:id/edit" component={TrailEdit} />
      <Route path="/" component={Footer} />
      
      </>
      
      
  );
}

export default App;

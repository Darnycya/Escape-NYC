import React, {useEffect, useState} from 'react'
import { Route } from 'react-router-dom'
import Login from './Login/Login'
import CreateAccount from './CreateAccount/CreateAccount'
import ShowTrails from './ShowTrails/ShowTrails'
import { readAllTrails } from '../services/trails'
import CreateTrail from './CreateTrail/CreateTrail'
import TrailDetail from './TrailDetail/TrailDetail'
import { readAllComments } from '../services/comments'
import HomePage from '../screens/HomePage/HomePage'
import SearchResults from '../screens/HomePage/HomePage'
// import TrailDetailPage from '../screens/TrailDetailPage/TrailDetailPage'
import Comments from './Comments/Comments'


export default function Main(props) {
  const { setCurrentUser } = props;

  const [trails, setTrails] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getTrails();
    getComments();
  }, [])

  const getTrails = async () => {
    const trailsList = await readAllTrails();
    setTrails(trailsList)
  }

  const getComments = async () => {
    const commentsList = await readAllComments();
    setComments(commentsList);
  }



  return (
    
    <main>
      <Route exact path='/' render={() => (
        <HomePage
        />
      )} />
      <Route path='/login' render={(props) => (
        <Login
          {...props}
          setCurrentUser={setCurrentUser}
        />
      )} />
      <Route path='/create-account' render={(props) => (
        <CreateAccount
          {...props}
          setCurrentUser={setCurrentUser}
        />
      )} />
      <Route exact path='/trails' render={() => (
        <ShowTrails
          trails={trails}
        />
      )} />
        <Route exact path='/trails/new' render={(props) => (
        <CreateTrail
        {...props}
          setTrails={setTrails}
          trails={trails}
        />
      )} />
      <Route exact path='/trails/:id' render={(props) => (
      <>
        <TrailDetail
        {...props}
        comments={comments}
        />
          <Comments
            {...props}
            comments={comments}
            />
            </>
        
      )} />

      <Route exact path='/trails/search:type'>
        <SearchResults />
      </Route>
        
        
    </main>
        
  )
}

// <TrailDetail
//           {...props}
//           comments={comments}
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
import TrailEditPage from '../screens/TrailEditPage/TrailEditPage'
import TrailEdit from '../components/TrailEdit/TrailEdit'
import Layout from '../components/Layout/Layout'


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
       <>
        <Layout />
        <ShowTrails
          trails={trails}
          />
          </>
      )} />
          
        <Route exact path='/new-trail' render={(props) => (
        <>
          <Layout />
        <CreateTrail
        {...props}
          setTrails={setTrails}
          trails={trails}
          />
          </>
      )} />
      <Route exact path='/trails/:id' render={(props) => (
        <>
          <Layout />
        <TrailDetail
            {...props}
            trails ={trails}
            comments={comments}
          />
          </>
      )} />

      <Route exact path='/trails/search:type'>
        <>
        <Layout />
          <SearchResults />
          </>
      </Route>

      <Route exact path='/trails/:id/update' render={(props) => (
        <>
          <Layout />
        <TrailEdit
          {...props}
          trails={trails}
          setTrails={setTrails}
          />
          </>
      )} />
      

      
        
        
    </main>
        
  )
}

// <TrailDetail
//           {...props}
//           comments={comments}
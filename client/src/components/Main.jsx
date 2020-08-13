import React from 'react'
import { Route } from 'react-router-dom'
import Login from './Login'
import CreateAccount from './CreateAccount'

export default function Main(props) {
  const { setCurrentUser } = props;
  return (
    <main>
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
        
     
    </main>
  )
}
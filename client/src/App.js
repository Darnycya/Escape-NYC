import React, {useState, useEffect} from 'react';
import Header from './components/Header/Header'
import Main from './components/Main'
import { verifyUser } from './services/auth'
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    handleVerify()
  }, [])

  const handleVerify = async () => {
    const userData = await verifyUser()
    setCurrentUser(userData);
  }



  return (
    <div className="App">
      
      <Main
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}/>
    </div>
  );
}

export default App;

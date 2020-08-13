import React, {useState} from 'react';
import Header from './components/Header/Header'
import Main from './components/Main'
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);



  return (
    <div className="App">
      <Header
        currentUser={currentUser}
      />
      <Main
        setCurrentUser={setCurrentUser}/>
    </div>
  );
}

export default App;

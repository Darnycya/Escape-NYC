import React, {useState, useEffect} from 'react'
import Header from '../Header/Header'
import { verifyUser } from '../../services/auth'

export default function Layout() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    handleVerify()
  }, [])

  const handleVerify = async () => {
    const userData = await verifyUser()
    setCurrentUser(userData);
  }

  return (
    <div>
      <Header
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
    </div>
  )
}

import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../../services/auth'



export default function Login(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await loginUser(formData);
    props.setCurrentUser(userData)
    props.history.push('/trails')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <label>
        Email:
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      </label>
    <label>
      Password:
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      </label>
      <Link to='/create-account'>Create An Account</Link>
      <button>Submit</button>
    </form>
  )
}
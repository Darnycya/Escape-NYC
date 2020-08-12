import React, {useState} from 'react'
import {Link} from 'react-router-dom'


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

  return (
    <form>
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
      <Link>Create An Account</Link>
      <button>Submit</button>
    </form>
  )
}
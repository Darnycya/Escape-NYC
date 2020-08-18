import React, { useState } from 'react'
import { registerUser } from '../../services/auth'
import "./CreateAccount.css"


export default function CreateAccount(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    user_image: "",
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
    const userData = await registerUser(formData);
    props.setCurrentUser(userData);
    props.history.push('/trails');
  }

  return (
    <body className="body-homepage">
    <div class="login">
    <form onSubmit={handleSubmit}>
      <h3>Create An Account</h3>
      <label>
        Name:
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      </label>
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
      <label>
        Photo:
      <input
        type="url"
        name="user_image"
        value={formData.user_image}
        onChange={handleChange}
      />
      </label>
      <button className="submit-button-2">Submit</button>
      </form>
      </div>
      </body>
  )
}
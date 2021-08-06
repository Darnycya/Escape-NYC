import React from 'react';
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
     
      <form className="profile-form">
      <img className="profile-picture" src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"></img><br />
          <input className="edit" placeholder="First Name"></input>
          <input className="edit" placeholder="Last Name"></input><br />
          <input className="edit" placeholder="Username"></input><br />
          Username can only contain letters and numbers.<br />
          <input className="edit" placeholder="Password"></input>
          <input className="edit" placeholder="Confirm Password"></input><br />
          Password should contain more than 6 letters.<br />
          <button>Edit</button><button>Submit</button>
        </form>

    </div>
  )
}

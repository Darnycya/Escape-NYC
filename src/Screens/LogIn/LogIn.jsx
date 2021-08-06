import React from 'react';
import './LogIn.css';

export default function Login() {
  return (
    <div>
      <form action="/action_page.php" method="post">
      <input type="text" name="fname" required></input>
      <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}


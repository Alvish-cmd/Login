import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar(props) {
  let history = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("access_token");
    history('/');
  }

  return (
    <div className="navbar">
      <h2>JS</h2>
      <button onClick={logoutHandler} id='logout_btn'>Logout</button>
    </div>
  );
}

export default Navbar;
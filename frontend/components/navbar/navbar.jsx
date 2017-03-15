import React from 'react';
import { Link } from 'react-router';

const Navbar = ({currentUser, logout}) => {
  if(currentUser){
    return(
      <div className="navbar">
        <h1>Quorums</h1>
        <input onClick={logout} value="Log Out"></input>
      </div>
    );
  } else {
    return(
      <div className="navbar-empty"></div>
    );
  }
};

export default Navbar;

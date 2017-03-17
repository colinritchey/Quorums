import React from 'react';
import { Link } from 'react-router';

const Navbar = ({currentUser, logout}) => {
  if(currentUser){
    return(
      <div className="navbar">
        <section>
          <h1><Link to={'/'}>Quorums</Link></h1>
          <input type="text" placeholder="Search Bar" className="search"></input>
          <input onClick={logout} value="Log Out"></input>
        </section>
      </div>
    );
  } else {
    return(
      <div className="navbar-empty"></div>
    );
  }
};

export default Navbar;

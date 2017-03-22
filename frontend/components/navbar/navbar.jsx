import React from 'react';
import { Link, hashHistory } from 'react-router';

import SearchFormContainer from '../search_form/search_form_container';

const Navbar = ({currentUser, logout}) => {
  if(currentUser){
    return(
      <div className="navbar">
        <section>
          <h1><Link to={'/'}>Quorums</Link></h1>
          <SearchFormContainer />
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

import React from 'react';
import { Link, hashHistory } from 'react-router';

import SearchFormContainer from '../search_form/search_form_container';


class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(){
    this.props.logout();
  }

  render(){

    if(this.props.currentUser){
      return(
        <div className="navbar">
          <section>
            <h1><Link to={'/'}>Quorums</Link></h1>
            <SearchFormContainer />
            <input onClick={this.handleLogOut} value="Log Out"></input>
          </section>
        </div>
      );
    } else {
      return(
        <div className="navbar-empty"></div>
      );
    }

  }
}

export default Navbar;

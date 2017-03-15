import React from 'react';
import { Link, hashHistory } from 'react-router';

const Home = ({currentUser}) => {
  // debugger;

  if(currentUser){
    return(
      <div className="home">
        <h1>Welcome Back {currentUser.username}</h1>
      </div>
    );
  } else {
    // hashHistory.push('/login');
    return(
      <div className="home">
        <h1>Welcome to Quora</h1>
      </div>
    );
  }
};

export default Home;

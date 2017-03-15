import React from 'react';
import { Link, hashHistory } from 'react-router';

const Home = ({currentUser}) => {
  if(currentUser){
    return(
      <div className="home">
        <h1>Welcome Back {currentUser.username}</h1>
      </div>
    );
  } else {
    return(
      <div className="home-login">
        <h1>Welcome to Quora</h1>
      </div>
    );
  }
};

export default Home;

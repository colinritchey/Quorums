import React from 'react';
import { Link, hashHistory } from 'react-router';

const Home = ({currentUser}) => {
  if(currentUser){
    return(
      <div className="home">
        <h1>Welcome Back {currentUser.username}</h1>
        <section
          className="subs-container col col-1-4">Subscriptions</section>
        <section
          className="quesitons-container col col-3-4">Questions</section>
      </div>
    );
  } else {
    return(
      <div>
        <h1>Welcome to Quora ... You shouldn't be seeing this</h1>
      </div>
    );
  }
};

export default Home;

import React from 'react';
import { Link, hashHistory } from 'react-router';

import QuestionIndexContainer from '../question/question_index_container';

const Home = ({currentUser}) => {
  if(currentUser){
    return(
      <div className="content">
        <section
          className="subs-container col col-1-4">Subscriptions (Placeholder)</section>
        <QuestionIndexContainer />

      </div>
    );
  } else {
    return(
      <div>
        <h1>Welcome to Quorums ... You shouldn't be seeing this</h1>
      </div>
    );
  }
};

export default Home;

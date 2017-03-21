import React from 'react';
import { Link, hashHistory } from 'react-router';

import QuestionIndexContainer from '../question/question_index_container';

const Home = ({currentUser}) => {
  if(currentUser){
    return(
      <div className="content">
        <div className="empty-sidebar col col-1-4">
          &nbsp;
        </div>

        <section className="subs-container ">
          <section>
            <h3>Feed</h3>
            <Link to={"/"}>edit</Link>
          </section>

          <ul>
            <li>
              Calculus
            </li>
            <li>
              Science
            </li>
            <li>
              Programming
            </li>
            <li>
              Javascript
            </li>
            <li>
              Cooking
            </li>
          </ul>

        </section>
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

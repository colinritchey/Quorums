import React from 'react';
import { Link, hashHistory } from 'react-router';

import QuestionIndexContainer from '../question/question_index_container';
import SidebarContainer from '../sidebar/sidebar_container';

const Home = ({currentUser}) => {
  if(currentUser){
    return(
      <div className="content">
        <div className="empty-sidebar col col-1-4">
          &nbsp;
        </div>

        <SidebarContainer formType="home"/>
        <QuestionIndexContainer formType="new"/>

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

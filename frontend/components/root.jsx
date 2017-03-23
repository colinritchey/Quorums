import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';

import HomeContainer from './home/home_container';
import SessionFormContainer from './session_form/session_form_container';
import QuestionDetailContainer from './question_detail/question_detail_container';
import QuestionFormContainer from './question_form/question_form_container';
import SearchContainer from './search/search_container';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    if(store.getState().session.currentUser){
      replace('/');
    }
  };

  const _ensureLogin = (next, replace) => {
    if(!store.getState().session.currentUser){
      replace('/login');
    }
  };

  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <IndexRoute component={HomeContainer} onEnter={_ensureLogin}/>
          <Route path="/login"
            component={SessionFormContainer}
            onEnter={_redirectIfLoggedIn} />

          <Route path="/signup"
            component={SessionFormContainer}
            onEnter={_redirectIfLoggedIn} />

          <Route path="/search/:searchByTitle"
            component={SearchContainer}
            onEnter={_ensureLogin} />
          
          <Route path="/search/:searchByTagId"
            component={SearchContainer}
            onEnter={_ensureLogin} />

          <Route path="/questions/:questionId"
            component={QuestionDetailContainer}
            onEnter={_ensureLogin} />


        </Route>
      </Router>
    </Provider>
  );
};

export default Root;

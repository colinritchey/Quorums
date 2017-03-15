import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store.js';
import Root from './components/root';

import { removeErrors } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", ()=> {
  const root = document.getElementById("root");

  let store;
  if (window.currentUser){
    const preloadedState = { session: { currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  window.removeErrors = removeErrors;
  ReactDOM.render(<Root store={store}/>, root);
});

// window.signup = signup;
// window.login = login;
// window.logout = logout;

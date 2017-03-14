import React from 'react';
import ReactDOM from 'react-dom';

import {signup, login, logout} from './util/session_api_util';
import configureStore from './store/store.js';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", ()=> {
  const root = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store}/>, root);
});
// document.addEventListener("DOMContentLoaded", ()=> {
//   const root = document.getElementById("root");
//   const store = configureStore();
//   window.store = store;
//   ReactDOM.render(<h1>Testing</h1>, root);
// });
window.signup = signup;
window.login = login;
window.logout = logout;

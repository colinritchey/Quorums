import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import configureStore from './store/store.js';
import Root from './components/root';

import { removeErrors } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", ()=> {
  const root = document.getElementById("root");
  Modal.setAppElement(document.body);

  let store;
  if (window.currentUser){
    const preloadedState = { session: { currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;

  ReactDOM.render(<Root store={store}/>, root);
});

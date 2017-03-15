import React from 'react';

import GreetingContainer from './greeting/greeting_container';
// TODO: rename greetings to navbar
const App = ({ children }) => (
  <div className="app">
    <h1>Quorums</h1>
    <GreetingContainer />
    { children }
  </div>
);

export default App;

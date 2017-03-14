import React from 'react';

import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <h1>Quorums</h1>
    <GreetingContainer />
    { children }
  </div>
);

export default App;
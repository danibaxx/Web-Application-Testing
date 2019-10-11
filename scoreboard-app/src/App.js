import React from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-scoreboard">
        <h1>Scoreboard!</h1>
      </div>
      <Display />
      <Dashboard />
    </div>
  );
}

export default App;

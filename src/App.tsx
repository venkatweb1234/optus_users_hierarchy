import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Subordinates from './components/Subordinates/Subordinates';

function App() {
  return (
    <div className="App">
    <Router>
      <Subordinates/>
    </Router>
    </div>
  );
}

export default App;

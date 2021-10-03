import React from 'react';
import './App.css';
import './pages/homepage/homepage.styles.scss';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div className="App">

      <Route exact path='/' component={HomePage}/>
    </div>
  );
}

export default App;

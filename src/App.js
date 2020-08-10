import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Spinning from './pages/spinning';
import './styles/global.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/spinning' component={Spinning}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

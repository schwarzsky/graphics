import React from 'react';

import {Router, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Spinning from './pages/spinning';
import BasicCharacter from './pages/basic-character';
import './styles/global.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/spinning' component={Spinning}/>
          <Route exact path='/basic-character' component={BasicCharacter}/>
          <Route exact path='*' component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

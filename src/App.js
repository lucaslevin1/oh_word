import React from 'react';
import Game from './components/Game';
import SpyMaster from './components/SpyMaster';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/spymaster/:cardUrlExtension' component={SpyMaster} />
        <Route path='/' component={Game} />
      </Switch>
    </Router>
  );
}

export default App;

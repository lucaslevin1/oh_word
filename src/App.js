import React from 'react';
import DeviceHandler from './components/DeviceHandler';
import SpyMaster from './components/SpyMaster';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path='/spymaster/:cardUrlExtension/:gameSessionId'
          component={SpyMaster}
        />
        <Route path='/' component={DeviceHandler} />
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Home from './views/Home';
import Hello from './views/Hello';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/hello/:name/:location" component={Hello} />
  </Switch>
);

export default Routes;

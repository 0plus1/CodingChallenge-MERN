import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Home from './views/Home';
import Hello from './views/Hello';
import NotFound from './views/NotFound';

import Book from './views/book/BookContainer';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/hello/:name/:location" component={Hello} />
    <Route exact path="/shelf/:id/read" component={() => <Book shelf />} />
    <Route exact path="/book/:id/read" component={() => <Book book />} />
    <Route exact path="*" component={NotFound} />
  </Switch>
);

export default Routes;

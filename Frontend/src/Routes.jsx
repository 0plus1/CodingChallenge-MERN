import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Shelves from './views/Shelves';
import SingleShelf from './views/SingleShelf';
import SingleBook from './views/SingleBook';
import FourOFour from './views/FourOFour';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Shelves} />
    <Route path="/shelf/:slug/:id" component={SingleShelf} />
    <Route path="/book/:slug/:id" component={SingleBook} />
    <Route component={FourOFour} />
  </Switch>
);

export default Routes;

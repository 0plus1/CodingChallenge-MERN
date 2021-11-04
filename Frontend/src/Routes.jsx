import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import BookDetails from "./views/BookDetails";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />

    <Route exact path="/book/:bookSlug" component={BookDetails} />
  </Switch>
);

export default Routes;

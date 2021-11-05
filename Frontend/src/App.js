import React, { Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Books from './components/book';
import NotFound from './components/notFound';
import Rentals from './components/rentals';
import Customers from './components/customers';
import NavBar from './components/navBar';
import BookForm from './components/bookForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import './App.css';

const App = () => (
  <Fragment>
    <NavBar />
    <main className="container">
      <Switch>
        <Route path="/books/:id" exact component={BookForm} />
        <Route path="/books" component={Books} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/notfound" component={NotFound} />
        <Redirect from="/" exact to="/books" />
        <Redirect to="/notfound" />
      </Switch>
    </main>
  </Fragment>
);

export default App;

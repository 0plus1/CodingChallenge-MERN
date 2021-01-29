import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import { store, persistor } from './configureStore';
import Routes from './Routes';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={createBrowserHistory()}>
        <Routes />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

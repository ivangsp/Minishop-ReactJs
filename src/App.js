import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import HomePage from './containers/HomePage';
import ProductPage from './containers/ProductPage/index';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/products/:id" exact component={ProductPage} />
      </div>
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: PropTypes.object.isRequired
};
export default App;

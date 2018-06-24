import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createLogger} from 'redux-logger';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware} from 'connected-react-router';

import reducer from './reducers/productsReducer';
import productsMiddleware from './middleware/productsMiddleWare';

// `__REDUX_DEVTOOLS_EXTENSION_COMPOSE__` will make sure that redux devtools
// store enhancher is applied last so that it will not miss any actions. See
// https://redux.js.org/api-reference/applymiddleware#tips for more information.
const composeStoreEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createBrowserHistory();

let store = createStore(
  connectRouter(history)(reducer), // Wrap top level reducer with `connectRouter`
  composeStoreEnhancers(
    applyMiddleware(
      routerMiddleware(history), // Integrate history actions with history API
      thunk,
      createLogger(),
      productsMiddleware
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

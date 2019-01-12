import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import reducer from './reducers/productsReducer';
import saga from './sagas/index';
import history from './history';

const sagaMiddleware = createSagaMiddleware();

const middleWares =
  process.env.NODE_ENV === 'development'
    ? [sagaMiddleware, createLogger()]
    : [sagaMiddleware];

const composeStoreEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  connectRouter(history)(reducer), // Wrap top level reducer with `connectRouter`
  composeStoreEnhancers(
    applyMiddleware(
      ...middleWares,
      routerMiddleware(history), // Integrate history actions with history API
      thunk
    )
  )
);

sagaMiddleware.run(saga);

export default store;

import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import history from './history';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

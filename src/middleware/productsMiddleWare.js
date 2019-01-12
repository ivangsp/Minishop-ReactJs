import axios from 'axios';
import * as type from '../actions/type';
import { errorOcuured } from '../actions/index';

const SERVER_URL = '/api';

export const productsMiddleWare = store => next => {
  return action => {
    next(action);
    if (action.type === type.FETCH_PRODUCTS_REQUESTED) {
      axios
        .get(SERVER_URL + '/products')
        .then(response => {
          if (response.status === 200) {
            store.dispatch({
              type: type.PRODUCTS_FETCHED,
              payload: response.data
            });
          }
        })
        .catch(error => {
          store.dispatch(errorOcuured('Oops eror occured' + error));
        });
    }
    return next(action);
  };
};

export default productsMiddleWare;

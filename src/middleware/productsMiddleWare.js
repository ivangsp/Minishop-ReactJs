import axios from 'axios';
import * as type from '../actions/type';
import {errorOcuured} from '../actions/index';

const SERVER_URL = 'https://erply-challenge.herokuapp.com/list';
const KEY = 'fae7b9f6-6363-45a1-a9c9-3def2dae206d';

export const productsMiddleWare = (store) => (next) => {
  return (action) => {
    next(action);
    if (action.type === type.FETCH_PRODUCTS_REQUESTED) {
      axios.get(SERVER_URL, {
        params: {
          'AUTH': KEY
        }
      })
        .then(response => {
          if (response.status === 200) {
            console.log('response11', response.data);
            store.dispatch({
              type: type.PRODUCTS_FETCHED,
              payload: response.data});
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

import { FETCH_PRODUCTS_REQUESTED } from '../actions/type';
import { fetchProducts } from './productSaga';

import { takeEvery } from 'redux-saga/effects';

function* sagaMiddleWare() {
  yield takeEvery(FETCH_PRODUCTS_REQUESTED, fetchProducts);
}

export default sagaMiddleWare;

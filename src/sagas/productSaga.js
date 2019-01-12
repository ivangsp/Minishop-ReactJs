import { PRODUCTS_FETCHED, ERROR_OCCURED } from '../actions/type';
import { fetchAllProducts } from './api';
import { call, put } from 'redux-saga/effects';

export function* fetchProducts() {
  try {
    const products = yield call(fetchAllProducts);
    yield put({ type: PRODUCTS_FETCHED, payload: products });
  } catch (e) {
    yield put({ type: ERROR_OCCURED, payload: e.message });
  }
}

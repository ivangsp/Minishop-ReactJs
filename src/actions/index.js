import * as type from '../actions/type';

export const fetchedProducts = (products) => ({
  type: type.PRODUCTS_FETCHED,
  payload: products
});

export const errorOcuured = (errorMsg) => ({
  type: type.ERROR_OCCURED,
  payload: errorMsg
});

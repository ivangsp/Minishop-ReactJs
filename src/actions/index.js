import * as type from '../actions/type';

export const fetchedProducts = (products) => ({
  type: type.PRODUCTS_FETCHED,
  payload: products
});

export const errorOcuured = (errorMsg) => ({
  type: type.ERROR_OCCURED,
  payload: errorMsg
});

export const handlePageClick = (pageNumber) => ({
  type: type.SET_PRODUCTS_PER_PAGE,
  payload: pageNumber
});

export const filterBy = (item) => ({
  type: type.FILTERBY,
  payload: item
});

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

export const addProductToCart = (prod) => ({
  type: type.ADD_TO_CART,
  payload: prod
});

export const increaseQty = (prod, qty) => ({
  type: type.INCREASE_QTY,
  payload: {prod: prod, qty: qty}
});

// export const viewBasket = () => {
//   type: type.VIEW_BASKET
// }

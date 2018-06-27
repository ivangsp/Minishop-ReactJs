import * as type from '../actions/type';
import {
  filterProductsBy,
  containsObject,
  updateTotalAmount
} from './helperFunctions';

export const fetchedProducts = products => ({
  type: type.PRODUCTS_FETCHED,
  payload: products
});

export const errorOcuured = errorMsg => ({
  type: type.ERROR_OCCURED,
  payload: errorMsg
});

export const handlePageClick = pageNumber => (dispatch, getState) => {
  const numpages = Math.ceil(getState().filteredProducts.length / 12);
  const nextPage = pageNumber + getState().currentPage;
  dispatch({
    type: type.SET_PRODUCTS_PER_PAGE,
    payload: { numpages: numpages, nextPage: nextPage }
  });
};

export const filterBy = item => (dispatch, getState) => {
  const filteredProds = filterProductsBy(item, getState().products);
  dispatch({
    type: type.FILTERBY,
    payload: filteredProds
  });
};

export const addProductToCart = prod => (dispatch, getState) => {
  if (!containsObject(prod, getState().basket)) {
    let product = prod;
    product['qty'] = 1;

    // add the product in the basket
    let newBasket = getState().basket;
    newBasket.push(product);

    // update the num of items in the basket
    const numItemBasket = getState().numItemBasket + 1;

    // update the totalAmount
    const totalAmount = updateTotalAmount(newBasket);

    dispatch({
      type: type.ADD_TO_CART,
      payload: {
        basket: newBasket,
        numItemBasket: numItemBasket,
        totalAmount: totalAmount,
        msg: 'added successfully!!!'
      }
    });
  }
  // product ealready exists in the basket
  else {
    dispatch({
      type: type.SET_MESSAGE,
      payload: 'Already exists in the cart'
    });
  }
};

export const increaseQty = (prod, qty) => (dispatch, getState) => {
  let basketItem = prod;
  const index = getState().basket.indexOf(prod);

  // check if the product exists in the basket
  if (index > -1) {
    const newQty = qty + prod.qty;

    let newBasket = getState().basket;
    let numItems = getState().numItemBasket;

    // if new qty = 0, then remove it from basket
    // if also action.payload.qty=0, then remove the prod from basket
    if (newQty <= 0 || qty === 0) {
      newBasket.splice(index, 1);
      numItems = numItems - 1;
    } else {
      basketItem.qty = newQty;
      newBasket[index] = basketItem;
    }
    // update the totalAmount
    const totalAmount = updateTotalAmount(newBasket);

    dispatch({
      type: type.INCREASE_QTY,
      payload: {
        basket: newBasket,
        numberOfItems: numItems,
        totalAmount: totalAmount
      }
    });
  } else {
    dispatch({
      type: type.SET_MESSAGE,
      payload: 'Ooops products does not exist'
    });
  }
};

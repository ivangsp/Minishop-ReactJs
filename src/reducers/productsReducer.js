import * as type from '../actions/type';
const intitialState = {
  products: [],
  productsPerPage: [],
  filteredProducts: [],
  numPages: undefined,
  currentPage: 0,
  loading: true,
  basket: [],
  numItemBasket: 0,
  baskethidden: true,
  totalAmount: 0.0,
  product: undefined,
  msg: null
};

const reducer = (state = intitialState, action) => {
  switch (action.type) {
    case type.PRODUCTS_FETCHED:
      const numPages = Math.ceil(action.payload.length / 12);
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
        productsPerPage: action.payload.slice(0, 12),
        numPages: numPages,
        loading: false
      };

    case type.SET_PRODUCTS_PER_PAGE:
      // check if the nextpage is not less than 0
      // and also not more than the total number of pages
      if (
        action.payload.nextPage >= 0 ||
        action.payload.nextPage <= state.numPages
      ) {
        return {
          ...state,
          productsPerPage: state.filteredProducts.slice(
            action.payload.nextPage * 12,
            (action.payload.nextPage + 1) * 12
          ),
          currentPage: action.payload.nextPage,
          numPages: action.payload.numpages
        };
      }
      return state;

    // filter products
    case type.FILTERBY:
      return {
        ...state,
        filteredProducts: action.payload,
        productsPerPage: action.payload.slice(
          state.currentPage * 12,
          (state.currentPage + 1) * 12
        )
      };

    // add products to cart
    case type.ADD_TO_CART:
      return {
        ...state,
        basket: action.payload.basket,
        numItemBasket: action.payload.numItemBasket,
        totalAmount: action.payload.totalAmount,
        msg: action.payload.msg
      };

    case type.INCREASE_QTY:
      return {
        ...state,
        basket: action.payload.basket,
        numItemBasket: action.payload.numberOfItems,
        totalAmount: action.payload.totalAmount
      };

    case type.VIEW_BASKET:
      return { ...state, baskethidden: !state.baskethidden };

    case type.SET_ACTIVE_PRODUCT:
      return { ...state, product: action.payload };

    case type.SET_MESSAGE:
      return { ...state, msg: action.payload };

    case type.DISMISS_MESSAGE:
      return { ...state, msg: null };

    default:
      return state;
  }
};

export default reducer;

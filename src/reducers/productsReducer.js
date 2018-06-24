import * as type from '../actions/type';
const intitialState = {
  products: [],
  productsPerPage: [],
  numPages: undefined,
  currentPage: 0
};

const reducer = (state = intitialState, action) => {
  switch (action.type) {
    case type.PRODUCTS_FETCHED:
      const numPages = Math.ceil(action.payload.length / 20);
      return {
        ...state,
        products: action.payload,
        productsPerPage: action.payload.slice(0, 20),
        numPages: numPages
      };
    case type.SET_PRODUCTS_PER_PAGE:
      const nextPage = action.payload + state.currentPage;
      if (nextPage >= 0 || nextPage <= state.numPages) {
        return {
          ...state,
          productsPerPage: state.products.slice((nextPage * 20), ((nextPage + 1) * 20)),
          currentPage: nextPage
        };
      }
      return state;
  }
  return state;
};
export default reducer;

import * as type from '../actions/type';
const intitialState = {
  products: [],
  productsPerPage: [],
  filteredProducts: [],
  numPages: undefined,
  currentPage: 0,
  loading: true
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
      const numpages = Math.ceil(state.filteredProducts.length / 12);
      const nextPage = action.payload + state.currentPage;
      if (nextPage >= 0 || nextPage <= state.numPages) {
        return {
          ...state,
          productsPerPage: state.filteredProducts.slice((nextPage * 12), ((nextPage + 1) * 12)),
          currentPage: nextPage,
          numPages: numpages
        };
      }
      return state;

    case type.FILTERBY:
      console.log('lll', action.payload);
      debugger;
      if (action.payload.country !== undefined && action.payload.instock === undefined) {
        const newArray = state.products.filter((el) => {
          return el.store === action.payload.country;
        });
        return {...state,
          filteredProducts: newArray,
          productsPerPage: newArray.slice((state.currentPage * 12), ((state.currentPage + 1) * 12))};
      } else if (action.payload.instock !== undefined && action.payload.country === undefined) {
        const newArray = state.products.filter((el) => {
          return el.instock === action.payload.instock;
        });
        return {...state,
          filteredProducts: newArray,
          productsPerPage: newArray.slice((state.currentPage * 12), ((state.currentPage + 1) * 12))
        };
      } else if (action.payload.instock !== undefined && action.payload.country !== undefined) {
        const newArray = state.products.filter((el) => {
          return el.store === action.payload.country &&
          el.instock === action.payload.instock;
        });
        return {...state,
          filteredProducts: newArray,
          productsPerPage: newArray.slice((state.currentPage * 12), ((state.currentPage + 1) * 12))};
      }
      return {...state,
        filteredProducts: state.products,
        productsPerPage: state.products.slice((state.currentPage * 12), ((state.currentPage + 1) * 12))};
  }
  return state;
};
export default reducer;

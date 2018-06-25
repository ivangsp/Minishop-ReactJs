import * as type from '../actions/type';
const intitialState = {
  products: [],
  productsPerPage: [],
  filteredProducts: [],
  numPages: undefined,
  currentPage: 0,
  loading: true,
  basket: [],
  baskethidden: true
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

    case type.ADD_TO_CART:

      if (!containsObject(action.payload, state.basket)) {
        var product = action.payload;
        product['qty'] = 1;
        const oldBasket = state.basket
        oldBasket.push(product);
        return {...state, basket: oldBasket};
      }
      return state;

    case type.INCREASE_QTY:
      var basketItem = state.basket[action.payload.index];
      const newQty = action.payload.qty + basketItem.Qty;
      basketItem.Qty = newQty;
      var newBasket = state.basket;
      newBasket[action.payload.index] = basketItem;
      return {...state, basketItem: newBasket};

    case type.VIEW_BASKET:
      return {...state, baskethidden: !state.baskethidden};
  }
  return state;
};

function containsObject (obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
    if (list[i].id === obj.id) {
      return true;
    }
  }

  return false;
}
export default reducer;

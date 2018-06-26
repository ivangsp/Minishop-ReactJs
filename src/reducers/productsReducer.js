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
  product: undefined
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
        const oldBasket = state.basket;
        oldBasket.push(product);
        const numItemBasket = state.numItemBasket + 1;
        // update the totalAmount
        const totalAmount = updateTotalAmount(oldBasket);
        return {...state, basket: oldBasket, numItemBasket: numItemBasket, totalAmount: totalAmount};
      }
      return state;

    case type.INCREASE_QTY:
      var basketItem = action.payload.prod;
      const index = state.basket.indexOf(basketItem);

      // check if the product exists in the basket
      if (index > -1) {
        const newQty = action.payload.qty + action.payload.prod.qty;

        var newBasket = state.basket;
        var numItems = state.numItemBasket;

        // if new qty = 0, remove from basket
        // if also action.payload.qty=0,
        // means its a request to remove the prod from basket
        if (newQty <= 0 || action.payload.qty === 0) {
          newBasket.splice(index, 1);
          numItems = numItems - 1;
        } else {
          basketItem.qty = newQty;
          newBasket[index] = basketItem;
        }
        // update the totalAmount
        const totalAmount = updateTotalAmount(newBasket);
        return {...state, basket: newBasket, numItemBasket: numItems, totalAmount: totalAmount};
      }
      break;
      // return state;

    case type.VIEW_BASKET:
      return {...state, baskethidden: !state.baskethidden};

    case type.SET_ACTIVE_PRODUCT:
      return {...state, product: action.payload};
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

const updateTotalAmount = (basket) => {
  var i;
  var amount = 0;
  for (i = 0; i < basket.length; i++) {
    amount = amount + basket[i].qty * basket[i].price;
  }
  return amount;
};
export default reducer;

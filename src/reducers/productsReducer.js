import * as type from '../actions/type';
const intitialState = {
  products: []
};

const reducer = (state = intitialState, action) => {
  switch (action.type) {
    case type.PRODUCTS_FETCHED:
      return {
        ...state, products: action.payload
      };
  }
  return state;
};
export default reducer;

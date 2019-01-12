import { connect } from 'react-redux';
import * as type from '../actions/type';
import Home from '../components/home/index';
import {
  handlePageClick,
  filterBy,
  addProductToCart,
  increaseQty
} from '../actions/index';

const mapStateToProps = ({
  productsPerPage,
  loading,
  currentPage,
  numPages,
  basket,
  baskethidden,
  numItemBasket,
  totalAmount,
  msg
}) => ({
  products: productsPerPage,
  loading: loading,
  currentPage: currentPage,
  numPages: numPages,
  basket: basket,
  baskethidden: baskethidden,
  numItemBasket: numItemBasket,
  totalAmount: totalAmount,
  msg: msg
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProducts: () => dispatch({ type: type.FETCH_PRODUCTS_REQUESTED }),
  handlePageClick: page => dispatch(handlePageClick(page)),
  filterBy: item => dispatch(filterBy(item)),
  addProductToCart: prod => dispatch(addProductToCart(prod)),
  increaseQty: (prod, qty) => dispatch(increaseQty(prod, qty)),
  hideBasket: () => dispatch({ type: type.VIEW_BASKET }),
  setActiveProduct: product => {
    dispatch({ type: type.SET_ACTIVE_PRODUCT, payload: product });
    ownProps.history.push('/products/' + product.id);
  },
  dismissMessage: () => dispatch({ type: type.DISMISS_MESSAGE })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
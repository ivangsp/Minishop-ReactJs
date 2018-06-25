import {connect} from 'react-redux';
import * as type from '../actions/type';
import Home from '../components/home/index';
import {
  handlePageClick, filterBy, addProductToCart, increaseQty
} from '../actions/index';

const mapStateToProps =
    ({productsPerPage, loading, currentPage, numPages, basket, baskethidden}) => ({
      products: productsPerPage,
      loading: loading,
      currentPage: currentPage,
      numPages: numPages,
      basket: basket,
      baskethidden: baskethidden

    });

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch({type: type.FETCH_PRODUCTS_REQUESTED}),
  handlePageClick: (page) => dispatch(handlePageClick(page)),
  filterBy: (item) => dispatch(filterBy(item)),
  addProductToCart: (prod) => dispatch(addProductToCart(prod)),
  increaseQty: (arrayIndex, qty) => dispatch(increaseQty(arrayIndex, qty)),
  hideBasket: () => dispatch({type: type.VIEW_BASKET})
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

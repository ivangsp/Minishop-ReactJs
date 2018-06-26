import {connect} from 'react-redux';
import * as type from '../actions/type';
import ProductPage from '../components/productsPage/index';
import {addProductToCart, increaseQty} from '../actions/index';

const mapStateToProps =
    ({productsPerPage, loading,
      basket, baskethidden, numItemBasket, totalAmount, product}) => ({
      products: productsPerPage,
      loading: loading,
      basket: basket,
      baskethidden: baskethidden,
      numItemBasket: numItemBasket,
      totalAmount: totalAmount,
      product: product

    });

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (prod) => dispatch(addProductToCart(prod)),
  increaseQty: (prod, qty) => dispatch(increaseQty(prod, qty)),
  hideBasket: () => dispatch({type: type.VIEW_BASKET})
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

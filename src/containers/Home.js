import {connect} from 'react-redux';
import * as type from '../actions/type';
import Home from '../components/home/index';

const mapStateToProps = ({products}) => ({
  products: products
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch({type: type.FETCH_PRODUCTS_REQUESTED})
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

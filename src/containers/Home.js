import {connect} from 'react-redux';
import * as type from '../actions/type';
import Home from '../components/home/index';
import {handlePageClick} from '../actions/index';

const mapStateToProps = ({productsPerPage}) => ({
  products: productsPerPage
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch({type: type.FETCH_PRODUCTS_REQUESTED}),
  handlePageClick: (page) => dispatch(handlePageClick(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

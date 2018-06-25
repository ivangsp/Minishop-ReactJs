import {connect} from 'react-redux';
import * as type from '../actions/type';
import Home from '../components/home/index';
import {handlePageClick, filterBy} from '../actions/index';

const mapStateToProps = ({productsPerPage, loading}) => ({
  products: productsPerPage,
  loading: loading
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch({type: type.FETCH_PRODUCTS_REQUESTED}),
  handlePageClick: (page) => dispatch(handlePageClick(page)),
  filterBy: (item) => dispatch(filterBy(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  DISMISS_MESSAGE,
  SET_ACTIVE_PRODUCT,
  VIEW_BASKET
} from '../../actions/type';

import NavBar from '../../components/NavBar';
import ProductList from './ProductList';
import FilterComponent from './FilterComponent';
import Pagination from './Pagination';
import BasketList from './BasketList';
import AlertSuccess from '../../components/AlertSuccess';

import {
  fetchProducts,
  handlePageClick,
  filterBy,
  addProductToCart,
  increaseQty
} from '../../actions/index';

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="container-fluid">
        <NavBar
          hideBasket={() => this.props.hideBasket()}
          basket={this.props.basket}
          numItemBasket={this.props.numItemBasket}
        />

        {/* pop message */}
        {this.props.msg !== null ? (
          <div className="row">
            <div className="col-md-6 col-sm-12 offset-md-3">
              <AlertSuccess
                msg={this.props.msg}
                dismissMessage={this.props.dismissMessage}
              />
            </div>
          </div>
        ) : null}

        {/* loader */}
        {this.props.loading ? (
          <div className="row">
            <div className="col-6 col-md-offset-3">
              <i className="fa fa-spinner spinner" />
            </div>
          </div>
        ) : (
          <div>
            <div className="row">
              <div className="col-sm-12 col-md-2">
                <FilterComponent
                  filterBy={item => this.props.filterBy(item)}
                  products={this.props.products}
                />
              </div>
              <div className="col-sm-12 col-md-10">
                <ProductList
                  products={this.props.products}
                  addProductToCart={prod => this.props.addProductToCart(prod)}
                  setActiveProduct={prod => this.props.setActiveProduct(prod)}
                />
              </div>
            </div>
            <div className="row">
              <BasketList
                basket={this.props.basket}
                increaseQty={(prod, qty) => this.props.increaseQty(prod, qty)}
                baskethidden={this.props.baskethidden}
                totalAmount={this.props.totalAmount}
              />
            </div>
            <div className="row">
              <div className="col-2 col-md-offset-5 ">
                <Pagination
                  numPages={this.props.numPages}
                  currentPage={this.props.currentPage}
                  handlePageClick={item => this.props.handlePageClick(item)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

HomePage.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  handlePageClick: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  filterBy: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number,
  addProductToCart: PropTypes.func.isRequired,
  increaseQty: PropTypes.func.isRequired,
  basket: PropTypes.array.isRequired,
  hideBasket: PropTypes.func.isRequired,
  baskethidden: PropTypes.bool.isRequired,
  numItemBasket: PropTypes.number.isRequired,
  totalAmount: PropTypes.number.isRequired,
  setActiveProduct: PropTypes.func.isRequired,
  msg: PropTypes.string,
  dismissMessage: PropTypes.func.isRequired
};

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
  fetchProducts: () => dispatch(fetchProducts()),
  handlePageClick: page => dispatch(handlePageClick(page)),
  filterBy: item => dispatch(filterBy(item)),
  addProductToCart: prod => dispatch(addProductToCart(prod)),
  increaseQty: (prod, qty) => dispatch(increaseQty(prod, qty)),
  hideBasket: () => dispatch({ type: VIEW_BASKET }),
  setActiveProduct: product => {
    dispatch({ type: SET_ACTIVE_PRODUCT, payload: product });
    ownProps.history.push('/products/' + product.id);
  },
  dismissMessage: () => dispatch({ type: DISMISS_MESSAGE })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

/* eslint-disable no-mixed-spaces-and-tabs,indent */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavBar from '../common/NavBar';
import ProductList from './ProductList';
import FilterComponent from './FilterComponent';
import Pagination from './Pagination';
import BasketList from './BasketList';

class Home extends Component {
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
Home.propTypes = {
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
  setActiveProduct: PropTypes.func.isRequired
};
export default Home;

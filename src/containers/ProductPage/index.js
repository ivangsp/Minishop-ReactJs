/* eslint-disable no-mixed-spaces-and-tabs,indent */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import NavBar from '../../components/NavBar';
import BasketList from '../HomePage/BasketList';
import Products from './Product';

import { connect } from 'react-redux';
import * as type from '../../actions/type';
import { addProductToCart, increaseQty } from '../../actions/index';

const ProductPage = props => {
  return (
    <div className="container-fluid">
      <NavBar
        hideBasket={() => props.hideBasket()}
        basket={props.basket}
        numItemBasket={props.numItemBasket}
      />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Products
            prod={props.product}
            addProductToCart={() => props.addProductToCart(props.product)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <Link to="/">Back </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2 col-sm-12">
          <BasketList
            basket={props.basket}
            increaseQty={(index, qty) => props.increaseQty(index, qty)}
            baskethidden={props.baskethidden}
            totalAmount={props.totalAmount}
          />
        </div>
      </div>
    </div>
  );
};

ProductPage.propTypes = {
  addProductToCart: PropTypes.func.isRequired,
  basket: PropTypes.array.isRequired,
  hideBasket: PropTypes.func.isRequired,
  baskethidden: PropTypes.bool.isRequired,
  numItemBasket: PropTypes.number.isRequired,
  totalAmount: PropTypes.number.isRequired,
  increaseQty: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

const mapStateToProps = ({
  productsPerPage,
  loading,
  basket,
  baskethidden,
  numItemBasket,
  totalAmount,
  product
}) => ({
  products: productsPerPage,
  loading: loading,
  basket: basket,
  baskethidden: baskethidden,
  numItemBasket: numItemBasket,
  totalAmount: totalAmount,
  product: product
});

const mapDispatchToProps = dispatch => ({
  addProductToCart: prod => dispatch(addProductToCart(prod)),
  increaseQty: (prod, qty) => dispatch(increaseQty(prod, qty)),
  hideBasket: () => dispatch({ type: type.VIEW_BASKET })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);

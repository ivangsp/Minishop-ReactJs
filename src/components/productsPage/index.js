/* eslint-disable no-mixed-spaces-and-tabs,indent */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import NavBar from '../common/NavBar';
import BasketList from '../home/BasketList';
import Products from './Product';

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
export default ProductPage;

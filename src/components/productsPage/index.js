/* eslint-disable no-mixed-spaces-and-tabs,indent */
import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../common/NavBar';
import BasketList from '../home/BasketList';
import Products from './Product';

const ProductPage = (props) => {
        return (
          <div className='container-fluid'>
            <NavBar hideBasket={() => props.hideBasket()}
              basket={props.basket} numItemBasket={props.numItemBasket} />
            <div className='row'>
              <Products prod={props.product} addProductToCart={() => props.addProductToCart(props.product)} />

            </div>
            <div className='row'>
              <BasketList
                basket={props.basket}
                increaseQty={(index, qty) => props.increaseQty(index, qty)}
                basketVisible={props.basketVisible}
                totalAmount={props.totalAmount} />
            </div>

          </div>
        );
};
ProductPage.propTypes = {
    addProductToCart: PropTypes.func.isRequired,
    basket: PropTypes.array.isRequired,
    hideBasket: PropTypes.func.isRequired,
    basketVisible: PropTypes.bool.isRequired,
    numItemBasket: PropTypes.number.isRequired,
    totalAmount: PropTypes.number.isRequired,
    increaseQty: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
};
export default ProductPage;

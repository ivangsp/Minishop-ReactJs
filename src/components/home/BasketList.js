import React from 'react';
import PropTypes from 'prop-types';

import BasketItem from './BasketItem';

const BasketList = ({basket, increaseQty, baskethidden, totalAmount}) => {
  const BasketItemNode = basket.map((prod, index) => {
    return (<BasketItem key={index} increaseQty={increaseQty} prod={prod} />);
  });
  return (
    <div className='modal fade' id='exampleModalCenter' tabIndex='-1' role='dialog'
      aria-labelledby='exampleModalCenterTitle' aria-hidden={baskethidden}>
      <div className='modal-dialog modal-dialog-centered' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLongTitle'>my Basket</h5>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-12'>
                  {BasketItemNode.length > 0 ? BasketItemNode
                    : <p>You have not added any product in the cart</p>
                  }
                </div>
              </div>
              {totalAmount > 0
                ? <div className='row totalAMount-row'>
                  <div className='col-6 offset-md-3 text-center'>
                    <p>Total Amount:  <b> &euro; {totalAmount}</b></p>
                  </div>
                </div>
                : null
              }
            </div>
          </div>
          {totalAmount > 0
            ? <div className='modal-footer'>
              <button type='button' className='btn btn-primary'>Proceed to checkout</button>
            </div>
            : null
          }
        </div>
      </div>
    </div>
  );
};
BasketList.propTypes = {
  increaseQty: PropTypes.func.isRequired,
  basket: PropTypes.array.isRequired,
  baskethidden: PropTypes.bool.isRequired,
  totalAmount: PropTypes.number.isRequired
};

export default BasketList;

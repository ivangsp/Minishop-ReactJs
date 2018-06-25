import React from 'react';
import PropTypes from 'prop-types';

import BasketItem from './BasketItem';

const BasketList = ({basket, increaseQty, baskethidden}) => {
  const BasketItemNode = basket.map((prod, index) => {
    return (<BasketItem increaseQty={increaseQty} prod={prod} />);
  });
  return (
    <div className='modal fade' id='exampleModalCenter' tabIndex='-1' role='dialog'
      aria-labelledby='exampleModalCenterTitle' aria-hidden={baskethidden}>
      <div className='modal-dialog modal-dialog-centered' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLongTitle'>Modal title</h5>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-12'>
                  {BasketItemNode.length > 0 ? BasketItemNode
                    : <p>No Products in the cart  yet</p>
                  }
                </div>
              </div>
            </div>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-dismiss='modal'>Close</button>
            <button type='button' className='btn btn-primary'>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};
BasketList.propTypes = {
  increaseQty: PropTypes.func.isRequired,
  basket: PropTypes.array.isRequired,
  baskethidden: PropTypes.bool.isRequired
};

export default BasketList;

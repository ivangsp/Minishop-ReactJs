import React from 'react';
import PropTypes from 'prop-types';

const BasketItem = ({prod, increaseQty}) => {
  return (
    <div className='row mb-3'>
      <div className='col-6'>
        <img src={prod.image} alt='' className='imageSize' />
      </div>
      <div className='col-6'>
        <p>{prod.name}</p>
        <p>QTY: {prod.qty}
          <a onClick={() => increaseQty(prod, 1)} id='plus'>
            <i className=' fas fa-plus ml-2 icon' />
          </a>
          <a onClick={() => increaseQty(prod, -1)} id='minus'>
            <i className='fas fa-minus ml-2 icon' />
          </a>
        </p>
        <p>Unit price: &euro;{prod.price}</p>
      </div>
    </div>
  );
};
BasketItem.propTypes = {
  prod: PropTypes.object.isRequired,
  increaseQty: PropTypes.func.isRequired
};

export default BasketItem;

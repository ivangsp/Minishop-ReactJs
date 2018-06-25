import React from 'react';
import PropTypes from 'prop-types';

const BasketItem = ({prod, increaseQty}) => {
  return (
    <div className='row'>
      <div className='col-4'>
        <img src={prod.image} alt='' />
      </div>
      <div className='col'>
        <p>{prod.name}</p>
        <p>{prod.qty}
          <span><i className='fas fa-plus' onClick={() => increaseQty(1)} /></span>
          <span><i className='fas fa-minus' onClick={() => increaseQty(-1)} /></span>
        </p>
        <p>{prod.price}</p>
      </div>
    </div>
  );
};
BasketItem.propTypes = {
  prod: PropTypes.object.isRequired,
  increaseQty: PropTypes.func.isRequired
};

export default BasketItem;

import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({product}) => {
  return (
    <div className='card mr-4 mt-3' >
      <img className='card-img-top imageSize' src={product.image} alt='Card image cap' />
      <div className='card-body'>
        <h5 className='card-title'>{product.name}</h5>
        <p className='card-text'><b>{product.price}</b></p>
        <p className='card-text'>
          {product.instock ? (<span className='inStock'>in stock ({product.store})</span>)
            : (<span className='outStock'>out of stock ({product.store})</span>)
          }</p>
        <a href='#' className='btn btn-primary'>Add to Cart</a>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductItem;

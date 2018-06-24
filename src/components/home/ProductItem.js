import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({product}) => {
  return (
    <div className='card' >
      <img className='card-img-top imageSize' src={product.image} alt='Card image cap' />
      <div className='card-body'>
        <h5 className='card-title'>{product.id}</h5>
        <p className='card-text'>Some quick example text to .</p>
        <a href='#' className='btn btn-primary'>Go somewhere</a>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductItem;

import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({product}) => {
  console.log('ppp', product);
  return (
    <div className='card' >
      <img className='card-img-top' src='...' alt='Card image cap' />
      <div className='card-body'>
        <h5 className='card-title'>Card title</h5>
        <p className='card-text'>Some quick example text to
                        build on the card title and make up the bulk of
                        the  content.</p>
        <a href='#' className='btn btn-primary'>Go somewhere</a>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductItem;

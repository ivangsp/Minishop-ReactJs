import React from 'react';
import PropTypes from 'prop-types';

const Product = ({prod, addProductToCart}) => {
  return (
    <div>
      <div className='row '>
        <div className='col-4'>
          <img src={prod.image} alt='' className='imageSize' />
        </div>
        <div className='col'>
          <h2>{prod.name}</h2>
          <p>Description: <b>{prod.description}</b></p>
          <p>Unit price: <span>{prod.currency}</span> {prod.price}</p>
          <p>Country: <b>{prod.store}</b></p>
          <p>Department: <b>{prod.department}</b> </p>
          <p>stock: {prod.instock ? <b>in stock</b> : <b>out of stock</b> } </p>
        </div>
      </div>
      <div className='row'>
        <div className='col-2 offset-md-5'>
          <button type='button' className='btn btn-primary'
            onClick={() => addProductToCart(prod)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
Product.propTypes = {
  prod: PropTypes.object.isRequired,
  addProductToCart: PropTypes.func.isRequired

};

export default Product;

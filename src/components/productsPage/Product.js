import React from 'react';
import PropTypes from 'prop-types';

const Product = ({prod, addProductToCart}) => {
  return (
    <div>
      <div className='row '>
        <div className='col-md-4 col-sm-12'>
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
        <div className='col-md-2 offset-md-5 col-sm-12'>
          {prod.instock
            ? <a className='btn btn-primary'
              onClick={() => addProductToCart(prod)}>Add to Cart
            </a>
            : null
          }
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

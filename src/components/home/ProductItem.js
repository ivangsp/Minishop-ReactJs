import React from 'react';
import PropTypes from 'prop-types';
// import {Redirect} from 'react-router-dom';

const ProductItem = (props) => {
  const navigateToProductsPage = () => {
    props.setActiveProduct(props.product);
    // props.history.push('/products');
  };
  return (
    <div className='card mr-4 mt-3 clickable' onClick={() => navigateToProductsPage()} >
      <img className='card-img-top imageSize' src={props.product.image} alt='Card image cap' />
      <div className='card-body'>
        <h5 className='card-title'>{props.product.name}</h5>
        <p className='card-text'><b>{props.product.price}</b></p>
        <p className='card-text'>
          {props.product.instock ? (<span className='inStock'>in stock ({props.product.store})</span>)
            : (<span className='outStock'>out of stock ({props.product.store})</span>)
          }</p>
        <a className='btn btn-primary' onClick={() => props.addProductToCart(props.product)}>Add to Cart</a>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  addProductToCart: PropTypes.func.isRequired,
  setActiveProduct: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired

};

export default ProductItem;

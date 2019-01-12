import React from 'react';
import PropTypes from 'prop-types';

import ProductItem from './ProductItem';

const ProductList = ({products, addProductToCart, setActiveProduct}) => {
  const prods = products.map((prod, index) => {
    return <ProductItem
      product={prod} key={index}
      addProductToCart={(prod) => addProductToCart(prod)}
      setActiveProduct={(prod) => setActiveProduct(prod)}
    />;
  });

  return (
    <div className='row'>

      {prods.length > 0 ? prods : null}

    </div>
  );
};
ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  addProductToCart: PropTypes.func.isRequired,
  setActiveProduct: PropTypes.func.isRequired

};
export default ProductList;

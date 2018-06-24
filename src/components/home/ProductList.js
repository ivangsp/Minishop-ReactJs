import React from 'react';
import PropTypes from 'prop-types';

import ProductItem from './ProductItem';

const ProductList = ({products}) => {
  console.log('pp', products);
  const prods = products.map((prod, index) => {
    return <ProductItem product={prod} key={index} />;
  });

  const p = () => {
    for (var i = 0; i < 20; i++) {
      return <ProductItem product={products[i]} key={i} />;
    }
  };

  return (
    <div className='row'>
      {p}
      {/* {prods.length > 0 ? prods: null} */}

    </div>
  );
};
ProductList.propTypes = {
  products: PropTypes.array.isRequired
};
export default ProductList;

import React from 'react';
import PropTypes from 'prop-types';

import ProductItem from './ProductItem';

const ProductList = ({products}) => {
  const prods = products.map((prod, index) => {
    return <ProductItem product={prod} key={index} />;
  });

  return (
    <div className='row'>

      {prods.length > 0 ? prods : null}

    </div>
  );
};
ProductList.propTypes = {
  products: PropTypes.array.isRequired
};
export default ProductList;

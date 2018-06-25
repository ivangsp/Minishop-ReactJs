import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({hideBasket, basket, numItemBasket}) => {
  return (
    <div>
      <nav className='navbar navbar-light bg-light justify-content-between'>
        <a className='navbar-brand' href='#'>
          <h1 className='App-title'>Mini shop</h1>
        </a>
        <button className='btn btn-outline-success ml-3' type='button'
          onClick={() => hideBasket()}
          data-toggle='modal' data-target='#exampleModalCenter'>
          <i className='fas fa-shopping-cart' />
          <span>{numItemBasket > 0 ? numItemBasket : null}</span>
        </button>
      </nav>
    </div>
  );
};
NavBar.propTypes = {
  hideBasket: PropTypes.func,
  basket: PropTypes.array.isRequired,
  numItemBasket: PropTypes.number.isRequired

};
export default NavBar;

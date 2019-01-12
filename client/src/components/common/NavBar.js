import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const NavBar = ({hideBasket, basket, numItemBasket}) => {
  return (
    <div className='container-fluid'>
      <nav className='navbar navbar-light bg-light justify-content-between'>
        <Link to='/' className='navbar-brand' href='#'>
          <h1 className='App-title'>Mini shop</h1>
        </Link>
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

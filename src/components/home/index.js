/* eslint-disable no-mixed-spaces-and-tabs,indent */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import NavBar from '../common/NavBar';
import ProductList from './ProductList';

class Home extends Component {
    componentDidMount () {
        this.props.fetchProducts();
    }

    render () {
        console.log('oooop', this.props.products)
        return <div className='container-fluid'>
          <NavBar />
          <ProductList products={this.props.products} />
          <nav aria-label='Page navigation example'>
            <ul className='pagination'>
              <li className='page-item'>
                <a className='page-link' onClick={() => this.props.handlePageClick(-1)}>Previous</a>
              </li>
              <li className='page-item'>
                <a className='page-link' onClick={() => this.props.handlePageClick(1)}>Next</a>
              </li>
            </ul>
          </nav>
        </div>;
    }
}
Home.propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    handlePageClick: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired
};
export default Home;

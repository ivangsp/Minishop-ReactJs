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
        return (
          <div className='container-fluid'>
            <NavBar />
            <ProductList products={[]} />
          </div>
        );
    }
}
Home.propTypes = {
    fetchProducts: PropTypes.func.isRequired
};
export default Home;

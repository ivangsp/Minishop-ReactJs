/* eslint-disable no-mixed-spaces-and-tabs,indent */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import NavBar from '../common/NavBar';
import ProductList from './ProductList';
import FilterComponent from './FilterComponent';

class Home extends Component {
    componentDidMount () {
        this.props.fetchProducts();
    }

    render () {
        return <div className='container-fluid'>
          <NavBar />
          {this.props.loading
                ? <div className='row'>
                  <div className='col-6 col-md-offset-3'>
                    <i className='fa fa-spinner spinner' />
                  </div>
                </div>

                : <div className='row'>
                  <div className='col-2'>
                    <FilterComponent filterBy={(item) => this.props.filterBy(item)} />
                  </div>
                  <div className='col'>
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
                  </div>
                </div>
            }

        </div>;
    }
}
Home.propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    handlePageClick: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    filterBy: PropTypes.func.isRequired
};
export default Home;

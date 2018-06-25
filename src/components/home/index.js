/* eslint-disable no-mixed-spaces-and-tabs,indent */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import NavBar from '../common/NavBar';
import ProductList from './ProductList';
import FilterComponent from './FilterComponent';
import Pagination from './Pagination';
import BasketList from './BasketList';

class Home extends Component {
    componentDidMount () {
        this.props.fetchProducts();
    }

    render () {
        return <div className='container-fluid'>
          <NavBar hideBasket={() => this.props.hideBasket()} basket={this.props.basket} />
          {this.props.loading
                ? <div className='row'>
                  <div className='col-6 col-md-offset-3'>
                    <i className='fa fa-spinner spinner' />
                  </div>
                </div>

                : <div>
                  <div className='row'>
                    <div className='col-2'>
                      <FilterComponent filterBy={(item) => this.props.filterBy(item)} />
                    </div>
                    <div className='col'>
                      <ProductList
                        products={this.props.products}
                        addProductToCart={(prod) => this.props.addProductToCart(prod)} />
                    </div>
                  </div>
                  <div className='row'>
                    <BasketList
                      basket={this.props.basket}
                      increaseQty={(index, qty) => this.props.increaseQty(index, qty)}
                      basketVisible={this.props.basketVisible} />
                  </div>
                  <div className='row'>
                    <div className='col-2 col-md-offset-5 '>
                      <Pagination
                        numPages={this.props.numPages}
                        currentPage={this.props.currentPage}
                        handlePageClick={(item) => this.props.handlePageClick(item)} />
                    </div>
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
    filterBy: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
    addProductToCart: PropTypes.func.isRequired,
    increaseQty: PropTypes.number.isRequired,
    basket: PropTypes.array.isRequired,
    hideBasket: PropTypes.func.isRequired,
    basketVisible: PropTypes.bool.isRequired
};
export default Home;

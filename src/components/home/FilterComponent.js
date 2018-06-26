import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FilterComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      country: undefined,
      instock: undefined,
      countries: []
    };
  }
  filterByCountry (value) {
    const country = value === 'all' ? undefined : value;
    this.setState({country: country}, function () {
      this.props.filterBy(this.state);
    });
  }

  filterByStock (value) {
    console.log('kkk', value);
    const instock = (value === 'all' ? undefined : true);
    this.setState({instock: instock}, () => {
      this.props.filterBy(this.state);
    });
  }

  componentDidMount () {
    var countries = this.props.products.map((obj) => { return obj.store; });
    countries = countries.filter((v, i) => { return countries.indexOf(v) === i; });
    this.setState({countries: countries});
  };

  render () {
    const countries = this.state.countries.map((ctry, index) => {
      return <option key={index} value={ctry}>{ctry}</option>;
    });

    return (
      <div>
        <p className='text-center'>Filter By</p>
        <div className='form-group'>
          <label htmlFor='country'>Country</label>
          <select className='form-control' id='country'
            onClick={(e) => this.filterByCountry(e.target.value)}>
            <option value='all'>all</option>
            {countries}
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='stock'>AVailable</label>
          <select className='form-control' id='stock'
            onClick={(e) => this.filterByStock(e.target.value)}>
            <option value={'all'}>all</option>
            <option value={1}>available</option>
          </select>
        </div>
      </div>
    );
  }
}
FilterComponent.propTypes = {
  filterBy: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
};
export default FilterComponent;

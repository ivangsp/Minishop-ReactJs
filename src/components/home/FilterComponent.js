import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FilterComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      country: undefined,
      instock: undefined
    };
  }
  filterByCountry (value) {
    const country = value === 'all' ? undefined : value;
    this.setState({country: country}, function () {
      this.props.filterBy(this.state);
    });
  }

  filterByStock (value) {
    const instock = (value === 'all' ? undefined : true);
    this.setState({instock: instock}, () => {
      this.props.filterBy(this.state);
    });
  }

  render () {
    return (
      <div>
        <p className='text-center'>Filter By</p>
        <div className='form-group'>
          <label htmlFor='exampleFormControlSelect1'>Country</label>
          <select className='form-control' id='exampleFormControlSelect1'
            onClick={(e) => this.filterByCountry(e.target.value)}>
            <option >all</option>
            <option value={'Estonia'}>Estonia</option>
            <option value={'Finland'}>Finland</option>
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='exampleFormControlSelect1'>AVailable</label>
          <select className='form-control' id='exampleFormControlSelect1'
            onClick={(e) => this.filterByStock(e)}>
            <option value={undefined}>all</option>
            <option value={1}>available</option>
          </select>
        </div>
      </div>
    );
  }
}
FilterComponent.propTypes = {
  filterBy: PropTypes.func.isRequired
};
export default FilterComponent;

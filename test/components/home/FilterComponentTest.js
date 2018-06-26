/* eslint-disable no-unused-expressions,no-unused-vars */
import React from 'react';
import {shallow} from 'enzyme';
import FilterComponent from '../../../src/components/home/FilterComponent';

describe('FilterComponent', () => {
  const product = [
    {id: 1, name: 'milk', price: 200, store: 'Finland'},
    {id: 2, name: 'bread', price: 300, store: 'Estonia'}
  ];
  it('FilterComponent renders successfully', () => {
    const filterBy = sinon.stub();
    const wrapper = shallow(<FilterComponent filterBy={filterBy} products={[]} />);
    expect(wrapper).not.to.be.empty;
  });

  // it('calls Filter function when filter by store is clicked', () => {
  //   const filterBy = sinon.stub();
  //   const wrapper = shallow(<FilterComponent filterBy={filterBy} products={product} />);
  //   const select = wrapper.find('#country');
  //   select.simulate('click');
  //   // select.find('option').at(2).simulate('click');
  //   expect(filterBy).to.have.been.calledWith('Estonia');
  // });

  // it('calls Filter function when filter by availability is clicked', () => {
  //   const filterBy = sinon.stub();
  //   const wrapper = shallow(<FilterComponent filterBy={filterBy} products={product} />);
  //   const select = wrapper.find('#stock');
  //   select.simulate('click');
  //   const argument = {countries: ['Finland', 'Estonia'], country: undefined, instock: true};
  //   expect(filterBy).to.have.been.calledWith(argument);
  // });
});

import React from 'react';
import {shallow} from 'enzyme';
import BasketList from '../../../src/components/home/BasketList';
import BasketItem from '../../../src/components/home/BasketItem';

describe('BasketList', () => {
  const products = [
    {id: 1, name: 'milk', price: 200, qty: 1},
    {id: 2, name: 'eggs', price: 300, qty: 1}
  ];
  it('BasketList renders successfully', () => {
    const increaeQty = sinon.stub();
    const wrapper = shallow(<BasketList
      increaseQty={increaeQty} basket={products} totalAmount={500} baskethidden={false} />);
    expect(wrapper).not.to.be.empty;
  });

  it('renders no product when basket is empty', () => {
    const increaeQty = sinon.stub();
    const wrapper = shallow(<BasketList
      increaseQty={increaeQty} basket={[]} totalAmount={500} baskethidden={false} />);
    expect(wrapper).not.to.have.descendants(BasketItem);
  });

  it('renders  products when basket is not empty', () => {
    const increaeQty = sinon.stub();
    const wrapper = shallow(<BasketList
      increaseQty={increaeQty} basket={products} totalAmount={500} baskethidden={false} />);
    expect(wrapper).to.have.exactly(2).descendants(BasketItem);
  });
});

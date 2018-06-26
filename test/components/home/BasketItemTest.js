import React from 'react';
import {shallow} from 'enzyme';
import BasketItem from '../../../src/components/home/BasketItem';

describe('BasketItem', () => {
  const product = {id: 1, name: 'milk', price: 200};
  it('BasketItem renders successfully', () => {
    const increaeQty = sinon.stub();
    const basketItem = shallow(<BasketItem prod={product} increaseQty={increaeQty} />);
    expect(basketItem).not.to.be.empty;
  });

  it('Increases the quantity when plus button is clicked', () => {
    const increaeQty = sinon.stub();
    const basketItem = shallow(<BasketItem prod={product} increaseQty={increaeQty} />);
    const plusBtn = basketItem.find('#plus');
    plusBtn.simulate('click');
    expect(increaeQty).to.have.been.calledWith(product, 1);
  });

  it('Decreases the quantity when minus button is clicked', () => {
    const increaeQty = sinon.stub();
    const basketItem = shallow(<BasketItem prod={product} increaseQty={increaeQty} />);
    const plusBtn = basketItem.find('#minus');
    plusBtn.simulate('click');
    expect(increaeQty).to.have.been.calledWith(product, -1);
  });
});

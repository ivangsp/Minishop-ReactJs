/* eslint-disable no-unused-expressions */
import React from 'react';
import {shallow} from 'enzyme';
import NaBar from '../../../src/components/NavBar';

describe('NaBar', () => {
  it('NavBar renders successfully', () => {
    const hidebasket = sinon.stub();
    const navBar = shallow(<NaBar basket={[]} numItemBasket={1} hideBasket={hidebasket} />);
    expect(navBar).not.to.be.empty;
  });
});

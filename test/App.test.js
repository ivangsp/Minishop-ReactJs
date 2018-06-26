import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/App';
import {createMemoryHistory} from 'history';

describe('App', () => {
  const history = createMemoryHistory('/');

  it('renders successfully', () => {
    const app = shallow(<App history={history} />);
    expect(app).not.to.be.empty;
  });
});

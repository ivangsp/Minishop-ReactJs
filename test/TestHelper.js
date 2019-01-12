const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const {configure} = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

global.chai = chai;
global.expect = chai.expect;
global.sinon = sinon;

configure({adapter: new Adapter()});

chai.use(chaiEnzyme());
chai.use(sinonChai);

require('babel-register')({
  babelrc: false,
  presets: [
    [
      'env',
      {
        'modules': 'commonjs',
        'targets': {'node': '8.10'}
      }
    ],
    'react'
  ],
  plugins: ['transform-object-rest-spread']
});

/* eslint-disable no-mixed-spaces-and-tabs */
import React,{Component} from 'react';

import NavBar from '../common/NavBar';
import ProductList from './ProductList';

class Home extends Component {
	constructor(props) {
		super(props);
	}
	render(){
	    return (
	        <div className="container-fluid">
                <NavBar></NavBar>
                <ProductList products={[{name: 'ivan'}]}></ProductList>
            </div>
        );
	}
}
export default Home;

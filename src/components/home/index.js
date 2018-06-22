/* eslint-disable no-mixed-spaces-and-tabs */
import React,{Component} from 'react';

import NavBar from '../common/NavBar';

class Home extends Component {
	constructor(props) {
		super(props);
	}
	render(){
	    return (
	        <div className="container-fluid">
                <NavBar></NavBar>
            </div>
        );
	}
}
export default Home;

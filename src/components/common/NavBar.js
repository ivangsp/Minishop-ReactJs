import React from 'react';

const NavBar = () => {
	return (
		<div>
			<nav className="navbar navbar-light bg-light justify-content-between">
				<a className="navbar-brand" href="#">
                    <h1 className="App-title">Mini shop</h1>
				</a>
				<button className="btn btn-outline-success ml-3" type="button">
                    <i className="fas fa-shopping-cart"></i>
                    <span>3</span>
                </button>
			</nav>
		</div>
	);
};
export default NavBar;

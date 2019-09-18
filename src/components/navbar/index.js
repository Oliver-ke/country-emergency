import React from 'react';
import './index.scss';
import crossImg from '../../asset/images/redcross.png';
const NavBar = () => {
	return (
		<nav>
			<div className="nav-wrapper">
				<a href="#" className="brand-logo">
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<img src={crossImg} className="logo-img" />
						<span className="logo-text">Country Emergency</span>
					</div>
				</a>
				<a href="#" data-target="mobile" className="sidenav-trigger">
					<i className="material-icons">menu</i>
				</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li>
						<a href="sass.html">Home</a>
					</li>
					<li>
						<a href="badges.html">About</a>
					</li>
				</ul>
			</div>
			<ul className="sidenav" id="mobile">
				<li>
					<a href="sass.html">Home</a>
				</li>
				<li>
					<a href="badges.html">About</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;

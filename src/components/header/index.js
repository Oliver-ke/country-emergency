import React from 'react';
import SearchContainer from '../search';
import './index.scss';

const Header = () => {
	return (
		<div className="header-container">
			<div>
				<SearchContainer />
			</div>
		</div>
	);
};

export default Header;

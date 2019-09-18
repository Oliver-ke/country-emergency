import React, { useEffect } from 'react';
import Search from './Search';
import './searchIndex.scss';
import { connect } from 'react-redux';
import { getCountries } from './../../actions/countryAction';

const SearchContainer = ({ getCountries, country }) => {
	useEffect(
		() => {
			getCountries();
		},
		[getCountries]
	);
	const { countries, loading } = country;
	return (
		<div className="search-container">
			<Search countries={countries} loading={loading} />
		</div>
	);
};

const mapStateToProps = state => ({
	country: state.country
});

export default connect(mapStateToProps, { getCountries })(SearchContainer);

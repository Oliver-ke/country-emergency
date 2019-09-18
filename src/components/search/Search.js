import React from 'react';
import Select from 'react-select';
import './searchIndex.scss';

const formatData = data => {
	const formated = data.map(item => {
		return {
			label: (
				<div style={{ display: 'flex', alignItems: 'center' }}>
					{' '}
					<img style={{ width: '20px', height: '20px' }} src={item.flag} />{' '}
					<span style={{ paddingLeft: '5px' }}>{item.name} </span>
				</div>
			),
			value: item.name
		};
	});
	if (formated.length <= 0) {
		return [];
	}
	return formated;
};

const Search = ({ countries, loading }) => {
	return (
		<div className="search">
			<Select
				isClearable={true}
				isSearchable={true}
				isLoading={loading}
				autoFocus={true}
				name="value"
				placeholder="Select Country"
				options={formatData(countries)}
				onChange={e => console.log(e)}
			/>
		</div>
	);
};

export default Search;

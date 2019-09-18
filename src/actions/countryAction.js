import { GET_COUNTRIES, GET_COUNTRY_EMGR, SET_LOADING, GET_ERRORS } from './types';
import { data } from '../asset/data.json';

export const getCountries = () => async dispatch => {
	dispatch(setLoading());
	try {
		const res = await fetch('https://restcountries.eu/rest/v2/all');
		const resData = await res.json();
		dispatch({
			type: GET_COUNTRIES,
			payload: resData
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: GET_ERRORS,
			payload: 'error'
		});
	}
};

export const getEmergencyNumber = countryName => async dispatch => {
	dispatch(setLoading());
	const localData = data.map(item => {
		return {
			country: item.Country.Name,
			fire: item.Fire.All[0],
			police: item.Police.All[0],
			ambulance: item.Ambulance.All[0]
		};
	});
	//const field = data.filter(item => item.Country.Name === countryName);
	//console.log(field);
};

// set loading
export const setLoading = () => ({
	type: SET_LOADING
});

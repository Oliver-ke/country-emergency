import { GET_COUNTRIES, GET_COUNTRY, SET_LOADING } from '../actions/types';

const initialState = {
	countries: [],
	country: {},
	loading: true
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_COUNTRIES:
			return {
				...state,
				countries: action.payload,
				loading: false
			};
		case GET_COUNTRY:
			return {
				...state,
				country: action.payload
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
};

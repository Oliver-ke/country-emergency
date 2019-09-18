import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import countryReducer from './countryReducer';

export default combineReducers({
	error: errorReducer,
	country: countryReducer
});

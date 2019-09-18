import React, { useEffect } from 'react';
import './app.scss';
import 'materialize-css/dist/css/materialize.min.css';
import m from 'materialize-css/dist/js/materialize.min.js';
import NavBar from './components/navbar';
import Header from './components/header';
import TableContainer from './components/table';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
	useEffect(() => {
		m.AutoInit();
	}, []);
	return (
		<Provider store={store}>
			<div className="full-screen">
				<NavBar />
				<Header />
				<TableContainer />
			</div>
		</Provider>
	);
};

export default App;

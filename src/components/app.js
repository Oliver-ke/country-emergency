import React from 'react';
import './app.scss';
import {Provider} from 'react-redux';
import store from '../store'
const App = () => {
	return (
		<Provider store={store}>
			<div className="full-screen">
				<div className="text-bg">
					<h1>React Page</h1>
					<br />
					<a className="button-line" href="https://github.com/oliver-ke/react-boilerplate" target="_blank">
						Vesit repository 🐶⭐️ 🌟 ✨ ⚡️ ☄️ 💥 🔥 🌪 🌈
				</a>
				</div>
			</div>
		</Provider>
	);
};

export default App;

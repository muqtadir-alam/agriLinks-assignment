import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store/Store';
import Form from './Form.jsx';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styles.css';
import { GetReport } from './GetReport';

const options = {
	position: positions.middle,
	timeout: 5000,
	offset: '30px',

	transition: transitions.SCALE,
};

ReactDOM.render(
	<Provider store={store}>
		<AlertProvider template={AlertTemplate} {...options}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Form />} />
					<Route path='reports' element={<GetReport />} />
				</Routes>
			</BrowserRouter>
			{/* <Form /> */}
		</AlertProvider>
	</Provider>,
	document.getElementById('root')
);

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './home/pages/HomePage';
import MoviesPage from './movies/pages/MoviesPage';

import './global.scss';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/movies' element={<MoviesPage />} />
			</Routes>
		</Router>
	);
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './home/pages/HomePage';
import MoviesPage from './movies/pages/MoviesPage';
import MoviePage from './movies/pages/MoviePage';

import './styles/global.scss';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/movies' element={<MoviesPage />} />
				<Route path='/movies/:id' element={<MoviePage />} />
			</Routes>
		</Router>
	);
};

export default App;

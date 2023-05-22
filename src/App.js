import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './home/pages/HomePage';
import MoviesPage from './movies/pages/MoviesPage';
import MoviePage from './movies/pages/MoviePage';
import BookingPage from './movies/pages/BookingPage';

import './styles/global.scss';

const App = () => {
	return (
		
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/movies' element={<MoviesPage />} />
				<Route path='/movies/:id' element={<MoviePage />} />
				<Route path='/booking/:id' element={<BookingPage />} />
			</Routes>
		</Router>
	);
};

export default App;

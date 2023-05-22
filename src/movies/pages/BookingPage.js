import React from 'react';

import { useParams } from 'react-router-dom';

import LayoutWeb from '../../_shared/LayoutWeb';
import { movies } from '../../db/movies';

const BookingPage = () => {

	const { id } = useParams();
	
	const bookedPlaces = id.split('-');
	const movieId = bookedPlaces.pop();
	const choosenMovie = movies.find((movie) => movie.id === id);

	return (

		<div>
			<LayoutWeb>
				<h3>Wybrane Miejsca:</h3>
				<ul>
					{bookedPlaces.map((place, key) => (
						<li key={key}>Miejsce numer: {place}</li>
					))}
				</ul>
				<p>Czy potwierdzasz rezerwacje?</p>
				<button onClick={() => console.log('dziekujemy za zakupy popup')}>
					Tak
				</button>
				<button
					onClick={() => {
						console.log('powrot na rezerwacje');
					}}>
					Nie
				</button>
			</LayoutWeb>
		</div>
	);
};

export default BookingPage;

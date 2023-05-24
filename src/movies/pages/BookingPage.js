import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import LayoutWeb from '../../_shared/LayoutWeb';
import { movies } from '../../db/movies';

import PopupConfirmReservation from '../components/PopupConfirmReservation';

import './BookingPlace.scss';

const BookingPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	
	const { id } = useParams();

	const bookedPlaces = id.split('-');
	const movieId = bookedPlaces.pop();
	const choosenMovie = movies.find((movie) => movie.id === movieId);

	return (

		<LayoutWeb>
			<div className='booking-place-box'>
				<h3 className='booking-place-main-text'>Wybrane Miejsca:</h3>

				<div className='booking-place-details'>
					<ul>
						{bookedPlaces.map((place, key) => (
							<li key={key}>
								Miejsce numer:
								<p className='booking-place-details-text-color'>{place}</p>
							</li>
						))}
					</ul>
					<p>Czy potwierdzasz rezerwacje?</p>
				</div>
				<div className='booking-place-box-buttons'>
					<button
						className='booking-place-box-button'
						onClick={() => setIsOpen(true)}>
						Tak
					</button>

					<Link to='/'>
						<button className='booking-place-box-button'>Nie</button>
					</Link>
				</div>
			</div>
			{isOpen && (
				<PopupConfirmReservation
					setIsOpen={setIsOpen}
					bookedPlaces={bookedPlaces}
					choosenMovie={choosenMovie}
				/>
			)}
		</LayoutWeb>
	);
};

export default BookingPage;

import React from 'react';

import { Link } from 'react-router-dom';

import './PopupConfirmReservation.scss';

const PopupConfirmReservation = ({ choosenMovie, bookedPlaces }) => {

	return (
		
		<div className='popup-confrim-reservation'>
			<div className='popup-confirm-reservation-box-image'>
				<img src={choosenMovie.img} alt={choosenMovie.title} />
			</div>
			<div className='popup-confirm-reservation-details'>
				<h3 className='popup-confirm-reservation-details-text'>
					Film, który wybrałeś to:
					<span className='popup-confirm-reservation-details-text-color'>
						{choosenMovie.title}
					</span>
				</h3>
				<p className='popup-confirm-reservation-details-text'>
					Miejsce:
					<span className='popup-confirm-reservation-details-text-color'>
						{bookedPlaces}
					</span>
				</p>
				<p className='popup-confirm-reservation-details-text'>
					Czas trwania:
					<span className='popup-confirm-reservation-details-text-color'>
						{choosenMovie.time}
					</span>
				</p>
				<div className='popup-confirm-reservation-details-box-buttons'>
					<Link to={'/'}>
						<button className='popup-confirm-reservation-details-button'>
							potwierdz rezerwacje
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PopupConfirmReservation;

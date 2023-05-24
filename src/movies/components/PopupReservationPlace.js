import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { termsPlaces } from '../../db/termsPlaces';

import './PopupReservationPlace.scss';

const SquarePlace = ({ number, isAvailable, isBooked, handleBookPlace }) => {
	return (
		<div
			style={{
				width: '30px',
				height: '30px',
				border: '1px solid gray',
				background: !isAvailable
					? 'red'
					: isAvailable && !isBooked
					? 'green'
					: 'yellow',
				cursor: isAvailable ? 'pointer' : 'not-allowed',
			}}
			onClick={() => handleBookPlace(number)}>
			{number}
		</div>
	);
};
const PopupReservationPlace = ({ setIsOpen, term, id }) => {
	const [isBooked, setBooked] = useState([]);

	const navigate = useNavigate();

	const placesURL = isBooked.join('-');

	const termPlaces = termsPlaces.find(
		(termPlaces) => termPlaces.termId === term.id
	);

	const handleBookPlace = (id) => {
		if (termPlaces.bookedPlaces.includes(id)) return;

		if (!termPlaces.bookedPlaces.includes(id) && !isBooked.includes(id)) {
			setBooked([...isBooked, id]);
		} else if (!termPlaces.bookedPlaces.includes(id) && isBooked.includes(id)) {
			setBooked(isBooked.filter((element) => element !== id));
		}
	};

	const renderBoard = (intRows, intColumns) => {
		const rows = [];
		for (let i = 0; i < intRows; i++) {
			let columns = [];
			for (let j = 0; j < intColumns; j++) {
				const tmpNumber = 1 + j + i * 10;
				columns.push(
					<SquarePlace
						handleBookPlace={handleBookPlace}
						number={tmpNumber}
						isAvailable={!termPlaces.bookedPlaces.includes(tmpNumber)}
						isBooked={isBooked.includes(tmpNumber)}
					/>
				);
			}

			rows.push(<div style={{ display: 'flex' }}>{columns}</div>);
		}

		return rows;
	};

	return (
		<>
			<div className='popup-reservacion-place'>
				<div className='popup-reservation-place-box-button'>
					<button
						className='popup-reservation-place-button-close'
						onClick={() => setIsOpen(false)}>
						X
					</button>
				</div>
				{renderBoard(10, 10)}
				{isBooked.length > 0 && (
					<div className='popup-reservation-place-box-button-reservation'>
						<button className='popup-reservation-place-button-go-to-booking' onClick={() => navigate(`/booking/${placesURL}-${id}`)}>
							Zarezerwuj
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default PopupReservationPlace;

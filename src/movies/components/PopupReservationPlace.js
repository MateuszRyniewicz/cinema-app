import React, { useState } from 'react';

import { termsPlaces } from '../../db/termsPlaces';

import './PopupReservationPlace.scss';

const SquarePlace = ({ number, isAvailable, isBooked, handleBookPlace }) => {
	const [color, setColor] = useState('green');

	return (
		<div
			style={{
				width: '30px',
				height: '30px',
				border: '1px solid gray',
				background: isAvailable ? 'green' : 'red',
				cursor: isAvailable ? 'pointer' : 'not-allowed',
				backgroundColor: isBooked && isAvailable ? 'yellow' : 'green',
			}}
			onClick={() => handleBookPlace(number)}>
			{number}
		</div>
	);
};
const PopupReservationPlace = ({ setIsOpen, term }) => {
	const [isBooked, setBooked] = useState([]);

	const termPlaces = termsPlaces.find(
		(termPlaces) => termPlaces.termId === term.id
	);

	const handleBookPlace = (id) => {
		if (termPlaces.bookedPlaces.includes(id)) return;

		if (!termPlaces.bookedPlaces.includes(id) && !isBooked.includes(id)) {
			setBooked([...isBooked, id]);

			console.log(isBooked);
		} else if (!termPlaces.bookedPlaces.includes(id) && isBooked.includes(id)) {
			setBooked(isBooked.filter((element) => element !== id));
			console.log(isBooked);
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
		<div className='popup-reservacion-place'>
			{renderBoard(10, 10)}
			<button onClick={() => setIsOpen(false)}>X</button>
		</div>
	);
};

export default PopupReservationPlace;

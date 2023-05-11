import React, { useState } from 'react';

import { termsPlaces } from '../../db/termsPlaces';

import './PopupReservationPlace.scss';

const SquarePlace = ({ number, isAvaiable }) => {
	const [color, setColor] = useState('green');
	return (
		<div
			style={{
				width: '30px',
				height: '30px',
				border: '1px solid gray',
				background: isAvaiable ? 'green' : 'red',
			}}
			onClick={() => setColor('red')}>
			{number}
		</div>
	);
};
const PopupReservationPlace = ({ setIsOpen, term }) => {
	const termPlaces = termsPlaces.find(
		(termPlaces) => termPlaces.termId === term.id
	);

	console.log(termsPlaces);
	console.log('term-id', term.id);
	console.log('termPlaces', termPlaces);

	const renderBoard = (intRows, intColumns) => {
		var rows = [];
		for (let i = 0; i < intRows; i++) {
			let columns = [];
			for (let j = 0; j < intColumns; j++) {
				const tmpNumber = 1 + j + i * 10;
				columns.push(
					<SquarePlace
						number={tmpNumber}
						isAvaiable={!termPlaces.bookedPlaces.includes(tmpNumber)}
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

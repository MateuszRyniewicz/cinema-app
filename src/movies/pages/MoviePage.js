import React, { useState } from 'react';

import { useParams } from 'react-router-dom';

import LayoutWeb from '../../_shared/LayoutWeb';

import { movieTerms } from '../../db/movieTerms.js';
import PopupReservationPlace from '../components/PopupReservationPlace';

import './MoviePage.scss';

const MoviePage = () => {
	const [isOpenPopupReservactionPlace, setIsOpenPopupReservactionPlace] =
		useState(false);
	const [tmpTerm, setTmpTerm] = useState(null);

	const { id } = useParams();

	const terms = movieTerms.filter((movieTerm) => movieTerm.idMovie === id);

	return (
		<>
			{isOpenPopupReservactionPlace && (
				<PopupReservationPlace
					setIsOpen={setIsOpenPopupReservactionPlace}
					term={tmpTerm}
				/>
			)}

			<LayoutWeb>
				{/* <h3>{id}</h3> */}

				<table>
					<thead>
						<tr>
							<th>Termin</th>
							<th>Zarezwerwuj miejsce</th>
						</tr>
					</thead>
					<tbody>
						{terms.map((term) => (
							<tr key={term.id}>
								<td>{term.title}</td>
								<td>
									<button
										onClick={() => {
											setIsOpenPopupReservactionPlace(true);
											setTmpTerm(term);
										}}>
										zobacz wolne miejsca
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</LayoutWeb>
		</>
	);
};

export default MoviePage;

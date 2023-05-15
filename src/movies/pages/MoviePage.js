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
				<div className='movie-page-container-table'>
					<table className='movie-page-table'>
						<thead className='movie-page-thead'>
							<tr className='movie-page-tr'>
								<th className='movie-page-th'>Termin</th>
								<th className='movie-page-th'>Zarezwerwuj miejsce</th>
							</tr>
						</thead>
						<tbody className='movie-page-tbody'>
							{terms.map((term) => (
								<tr className='movie-page-tr' key={term.id}>
									<td className='movie-page-td'>{term.title}</td>
									<td className='movie-page-td'>
										<button
											className='movie-page-button'
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
				</div>
			</LayoutWeb>
		</>
	);
};

export default MoviePage;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './MovieCard.scss';
//opis moze miec 100 znaków if >100 to wyśeitlają się 3 znaki po klik czyraj więcej opis sie rozrzezy.
const MovieCard = ({
	img,
	title,
	category,
	year,
	time,
	description,
	id,
	linkToRead,
}) => {
	const navigate = useNavigate();

	return (
		<div className='card'>
			<div className='card-box-image'>
				<img src={img} alt={title} />
			</div>
			<div className='card-details'>
				<h2 className='card-details-title'>{title}</h2>
				<div className='card-details-box-text'>
					<p>{year}</p>
					<p>{category}</p>
					<p>{time}</p>
				</div>
				<div className='card-details-box-text-main'>
					{description}
					<div className='card-details-box-text-main-link'>
						<Link to={linkToRead} className='card-details-text-main-link'>
							Więcej o filmie...
						</Link>
					</div>
				</div>
				<div className='card-box-button'>
					<button
						className='card-button-go-to-booking-page'
						onClick={() => navigate(`/movies/${id}`)}>
						zobacz terminy
					</button>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
//zrobić moviePage łanie ostylować. po klik w karte przenosi do cardPage. terminy dostępnych z listą miejsc.
//projekt ma byc na git hube. czyste read me. ma to byc app do zazadzania kinem.

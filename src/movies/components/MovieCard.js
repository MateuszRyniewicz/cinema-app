import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './MovieCard.scss';

const MovieCard = ({
	img,
	title,
	category,
	year,
	time,
	description,
	id,
	linkToRead,
	available,
}) => {
	const [isReadMore, setIsReadMore] = useState(false);

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
					{!isReadMore ? description.slice(0, 50) + '...' : description}
					{description.length > 50 && (
						<p
							className='card-details-box-text-show-more'
							onClick={() => setIsReadMore(!isReadMore)}>
							{isReadMore ? '...show less' : '...show more'}
						</p>
					)}
					<div className='card-details-box-text-main-link'>
						<Link
							target='_blank'
							to={linkToRead}
							className='card-details-text-main-link'>
							Więcej o filmie...
						</Link>
					</div>
				</div>
				<div className='card-box-button'>
					{available ? (
						<button
							className='card-button-go-to-booking-page'
							onClick={() => navigate(`/movies/${id}`)}>
							zobacz terminy
						</button>
					) : (
						<p>brak terminów</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default MovieCard;

import React from 'react';

import LayoutWeb from '../../_shared/LayoutWeb';
import MovieCard from '../components/MovieCard';

import { movies } from '../../db/movies';
import { movieTerms } from '../../db/movieTerms';

import './MoviesPages.scss';


const MoviesPage = () => {
	
	return (
		
		<LayoutWeb>
			<div className='container-cards'>
				{movies.map((movie) => {
					const available = movieTerms
						.filter((term) => term.idMovie === movie.id)
						.some((term) => term.available);

					return (
						<MovieCard
							img={movie.img}
							title={movie.title}
							category={movie.category}
							year={movie.year}
							time={movie.time}
							description={movie.description}
							linkToRead={movie.linkToRead}
							id={movie.id}
							available={available}
						/>
					);
				})}
			</div>
		</LayoutWeb>
	);
};

export default MoviesPage;

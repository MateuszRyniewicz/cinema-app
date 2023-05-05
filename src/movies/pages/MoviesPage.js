import React, { useState } from 'react';

import LayoutWeb from '../../_shared/LayoutWeb';
import MovieCard from '../components/MovieCard';

import { movies } from '../../db/movies';
import { movieTerms } from '../../db/movieTerms';

import './MoviesPages.scss';

const MoviesPage = () => {
	const [test, setTest] = useState(false);
	return (
		<LayoutWeb>
			<>
				<div className='container-cards'>
					{movies.map((movie) => {
						const terms = movieTerms.filter(
							(term) => term.idMovie === movie.id
						);
						// {
						// 	terms.map((term) => {
						// 		const movie1 = movieTerms.filter(
						// 			(movie1) => movie1.available == term.available
						// 		);
						// 		console.log(movie1);
						// 	});
						// }

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
								available={false}
							/>
						);
					})}
				</div>
			</>
		</LayoutWeb>
	);
};

export default MoviesPage;

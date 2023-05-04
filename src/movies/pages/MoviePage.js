import React from 'react';

import { useParams } from 'react-router-dom';

import LayoutWeb from '../../_shared/LayoutWeb';

import { movieTerms } from '../../db/movieTerms.js';

const MoviePage = () => {
	const { id } = useParams();

	const terms = movieTerms.filter((movieTerm) => movieTerm.idMovie === id);

	return (
		<LayoutWeb>
			<h3>{id}</h3>
			{terms.map((term) => (
				<p key={term.id}>{term.title}</p>
			))}
		</LayoutWeb>
	);
};

export default MoviePage;

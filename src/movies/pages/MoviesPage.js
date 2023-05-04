import React from 'react';

import LayoutWeb from '../../_shared/LayoutWeb';
import MovieCard from '../components/MovieCard';

import './MoviesPages.scss';

const data = [
	{
		img: 'https://fwcdn.pl/fpo/67/01/856701/8021051.6.jpg',
		title: 'Bullet Train',
		category: 'Akcja',
		year: '2023',
		time: '126 min',
		description:
			'Pięcioro zabójców, znajdujących się w szybkim pociągu jadącym z Tokio do Morioki, odkrywa, że ich zlecenia są ze sobą wzajemnie powiązane. Powstaje pytanie, kto wyjdzie z pociągu żywy i co ich czeka na stacji końcowej.',
		linkToRead: 'https://www.filmweb.pl/film/Bullet+Train-2022-856701',
		link: 'booking',
	},
	{
		img: 'https://fwcdn.pl/fpo/94/76/469476/8030930.6.jpg',
		title: 'Diuna',
		category: 'Sci-FI',
		year: '2021',
		time: '95 min',
		description:
			'Szlachetny ród Atrydów przybywa na Diunę, będącą jedynym źródłem najcenniejszej substancji we wszechświecie.',
		linkToRead: 'https://www.filmweb.pl/film/Diuna-2021-469476',
		link: 'booking',
	},
	{
		img: 'https://fwcdn.pl/fpo/63/18/626318/7998475.6.jpg',
		title: 'Batman',
		category: 'Sci-FI',
		year: '2022',
		time: '96 min',
		description:
			'Batman i James Gordon stawiają czoła nieobliczalnemu Człowiekowi-Zagadce w skorumpowanym Gotham City.',
		linkToRead: 'https://www.filmweb.pl/film/Batman-2022-626318',
		link: 'booking',
	},
	{
		img: 'https://fwcdn.pl/fpo/06/60/660/8021891.6.jpg',
		title: 'Gorączka',
		category: 'Sensacja',
		year: '1995',
		time: '93 min',
		description:
			'Zawodowy przestępca Neil McCauley organizuje zbrojny napad na opancerzoną furgonetkę. Śledztwo w tej sprawie prowadzi Vincent Hanna.',
		linkToRead: 'https://www.filmweb.pl/film/Gor%C4%85czka-1995-660',
		link: 'booking',
	},
];
const MoviesPage = () => {
	return (
		<LayoutWeb>
			<>
				<div className='container-cards'>
					{data.map((movie) => (
						<MovieCard
							img={movie.img}
							title={movie.title}
							category={movie.category}
							year={movie.year}
							time={movie.time}
							description={movie.description}
							linkToRead={movie.linkToRead}
							link={movie.link}
						/>
					))}
				</div>
			</>
		</LayoutWeb>
	);
};

export default MoviesPage;

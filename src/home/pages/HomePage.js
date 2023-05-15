import React from 'react';
import { Link } from 'react-router-dom';

import LayoutWeb from '../../_shared/LayoutWeb';

import './HomePage.scss';

const HomePage = () => {
	return (
		<LayoutWeb>
			<main className='main-home-page'>
				<div className='container-home-page'>
					<div className='home-page-box-text'>
						<h2 className='home-page-text-main'>Witamy w naszym Kinie </h2>
						<h4 className='home-page-text-below'>
							Zapraszamy do zapoznania się z naszymi filmami
						</h4>
					</div>
					<Link className='home-page-box-button' to='/movies'>
					<button className='home-page-button-go-to-movies-page'>filmy</button>
				</Link>
				</div>
			</main>
		</LayoutWeb>
	);
};

export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';

import './LayoutWeb.scss';

const LayoutWeb = ({ children }) => {
	
	return (
		<>
			<header className='header'>
				<ul className='menu'>
					<li>
						<Link className='menu-link' to='/'>
							Home
						</Link>
					</li>
					<li>
						<Link className='menu-link' to='/movies'>
							Filmy
						</Link>
					</li>
					<li>
						<Link className='menu-link' to='/booking'>
							Rezerwacja
						</Link>
					</li>
				</ul>
			</header>
			<main className='main'>{children}</main>
			<footer className='footer'>Movies App</footer>
		</>
	);
};

export default LayoutWeb;

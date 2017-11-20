import React from 'react';
import './Footer.css';

const year = new Date().getFullYear();

const Footer = () => (
	<footer>
		<small className="Footer__copyright">&copy; {year} Sasha Bajzek</small>
	</footer>
);

export default Footer;
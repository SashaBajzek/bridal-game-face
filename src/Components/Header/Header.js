import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
	<header>
		<Link to="/"><h1 className="Header__heading">Bridal Game Face</h1></Link>
		<ul className="Header__menu">
			<li><Link to="/">Home</Link></li>
			<li><Link to="/full-look">Full Look</Link></li>
			<li><Link to="/natural-look">Natural Look</Link></li>
			<li><Link to="/testing">Testing</Link></li>
			<li><Link to="/clean-up">Clean Up</Link></li>
		</ul>
	</header>
);

export default Header;
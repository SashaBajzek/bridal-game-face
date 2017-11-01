import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<header>
		<h1>Bridal Game Face</h1>
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
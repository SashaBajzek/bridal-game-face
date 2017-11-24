import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
	state = {
		menuOpen: false
	}

	toggleMenu = () => {
		this.setState({
			menuOpen: !this.state.menuOpen
		});
	}

	closeMenu = () => {
		this.setState({
			menuOpen: false
		});
	}
	
	render() {
		const { menuOpen } = this.state;
		return (
			<header className={menuOpen ? "menuOpen" : "menuClosed"}>
				<NavLink to="/"><h1 className="Header__heading">Bridal Game Face</h1></NavLink>
				<button className="hamburger" onClick={this.toggleMenu}>
					<span>Menu</span>
				</button>
				<nav>
					<ul className="Header__menu">
						<li><NavLink exact to="/" className="Header__link" activeClassName="Header__link--active" onClick={this.closeMenu}>Home</NavLink></li>
						<li><NavLink to="/full-look" className="Header__link" activeClassName="Header__link--active" onClick={this.closeMenu}>Full Look</NavLink></li>
						<li><NavLink to="/natural-look" className="Header__link" activeClassName="Header__link--active" onClick={this.closeMenu}>Natural Look</NavLink></li>
						<li><NavLink to="/testing" className="Header__link" activeClassName="Header__link--active" onClick={this.closeMenu}>Testing</NavLink></li>
						<li><NavLink to="/clean-up" className="Header__link" activeClassName="Header__link--active" onClick={this.closeMenu}>Clean Up</NavLink></li>
					</ul>
				</nav>
			</header>
		)
	}
}

export default Header;
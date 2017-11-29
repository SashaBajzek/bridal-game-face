import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import HeroImage from './IMG_6843.jpg';
import HeroFullLook from './F-Overall-After.jpg';
import NaturalLook from './Finished2.jpg';

const Home = () => (
	<main className="Home">
		<div className="Home__hero">
			<h1>Congratulations on your wedding!</h1>
			<div className="Home__hero-images">
				<Link to="/full-look"><img className="Home__hero-image Home__hero-image--desktop" src={HeroFullLook} alt="Full Makeup Look" /></Link>
				<img className="Home__hero-image" src={HeroImage} alt="Putting on bridal makeup" />
				<Link to="/natural-look"><img className="Home__hero-image Home__hero-image--desktop" src={NaturalLook} alt="Natural Makeup Look" /></Link>
			</div>
			<h2>Are you ready to put your game face on?</h2>
		</div>
		<p>This website is a tool to help you feel confident in your bridal makeup. Your bridal makeup should help you feel like the best version of yourself, not like you look like a completely different person.</p>
		<p>Feel free to add or remove steps, and to change the colors! There are no rules in makeup, these are just tips to help get you started and learn more about the process.</p>
		<h2>How to use this website</h2>
		<p>I created two bridal looks for you to start with: full look and natural look. <Link to="/full-look">Full Look</Link> shows from start to finish, how to apply a full face of makeup that will enhance your features. <Link to="/natural-look">Natural Look</Link> is the bare minimum for looking polished on your wedding day and was created for those who do not like the look of makeup on their face at all.</p>
		<p>It is important to do a trial run of your chosen bridal makeup in order to test how it looks in different lighting conditions so you have no surprises later when you view your wedding photos.  The <Link to="/testing">Testing</Link> section goes over what to test.</p>
		<p>Waterproof eye makeup is essential for brides as you don't want your makeup to budge if you sweat or cry tears of joy.  Waterproof makeup can be hard to wash off if you have not used it before.  The <Link to="/clean-up">Clean Up</Link> section shows you how to remove it.</p>
	</main>
);

export default Home;

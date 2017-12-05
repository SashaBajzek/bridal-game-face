import React from 'react';
import BeforeAfter from '../BeforeAfter/BeforeAfter';
import './FullLook.css';
import steps from './FullLook-Input.js';


//Images for headers
import HeaderRight from '../../Photos/Backgrounds/HeaderArt-Right.png';
import HeaderLeft from '../../Photos/Backgrounds/HeaderArt-Left.png';

import OverallBefore from "./FullLookPhotos/F-Overall-Before.jpg";
import OverallAfter from "./FullLookPhotos/F-Overall-After.jpg";

const BuildProductList = (products) => (
	products.map(product => (
		<li key={product.name}><a href={product.link}>{product.name}</a></li>
	))
);

const FullLook = () => (
	<main className="FullLook">
		<h2>Full Bridal Look</h2>
		<p>Full Look shows from start to finish, how to apply a full face of makeup that will enhance your features. Feel free to add or remove steps and to change the colors, experimenting to find what works best for you.</p>
		<p>Slide or use arrow keys to compare the before and after images</p>
	
		<BeforeAfter product="overall" beforeImg={OverallBefore} afterImg={OverallAfter} description="Putting on my bridal game face."/>
	
		{steps.map(step => (
			<section key={step.id} >
				<div className="FullLook__heading">
					<div className="FullLook__heading-image">
						<img src={HeaderLeft} alt="" />
					</div>
					<h3 className="FullLook__heading-text">{step.id}</h3>
					<div className="FullLook__heading-image">
						<img src={HeaderRight} alt="" />
					</div>
				</div>
	
				<BeforeAfter product={step.id} beforeImg={step.beforeImg} afterImg={step.afterImg} description={step.description}/>
	
				<p className="FullLook__description">
					<span className="FullLook__description-title">What it does: </span>
					{step.description}
				</p>
	
				{step.choosing ? 
					<p className="FullLook__procedure">
						<span className="FullLook__description-title">Tips for choosing a product: </span>
						{step.choosing}
					</p> : ""}
	
				<p className="FullLook__procedure">
					<span className="FullLook__description-title">Tips for applying: </span>
					{step.procedure}
				</p>
	
				{step.products ? 
					<div className="FullLook__procedure">
						<span className="FullLook__description-title">Products I Used: </span>
						<ul>{BuildProductList(step.products)}</ul>
					</div> : ""}

				{step.video ? <step.video /> : ""}
			</section>
		)
		)}
	</main>
);

export default FullLook;
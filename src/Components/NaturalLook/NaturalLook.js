import React from 'react';
import BeforeAfter from '../BeforeAfter/BeforeAfter';
import './NaturalLook.css';
import steps from './NaturalLook-Input';

//Images for headers
import HeaderRight from '../../Photos/Backgrounds/HeaderArt-Right.png';
import HeaderLeft from '../../Photos/Backgrounds/HeaderArt-Left.png';

import OverallBefore from './NaturalLookPhotos/Overall-Before.jpg';
import OverallAfter from './NaturalLookPhotos/Finished2.jpg';


const BuildProductList = (products) => (
	products.map(product => (
		<li key={product.name}><a href={product.link}>{product.name}</a></li>
	))
);

const BuildPhotoList = (photos) => (
	photos.map(photo => (
		<li key={photo.name}><img src={photo.name} alt={photo.caption} className="NaturalLook__detail-photo"/></li>
	))
);

const NaturalLook = () => (
	<main className="NaturalLook">
		<h2>Natural Bridal Look</h2>
		<p>Natural Look is the bare minimum for looking polished on your wedding day. It is a great look for those who do not like the look of makeup on their face at all.</p>
		<p>Slide or use arrow keys to compare the before and after images</p>
	
		<BeforeAfter product="overall" beforeImg={OverallBefore} afterImg={OverallAfter} description="Putting on my 'natural' bridal game face."/>
	
		{steps.map(step => (
			<section key={step.id} >
				<div className="NaturalLook__heading">
					<div className="NaturalLook__heading-image">
						<img src={HeaderLeft} alt="" />
					</div>
					<h3 className="NaturalLook__heading-text">{step.id}</h3>
					<div className="NaturalLook__heading-image">
						<img src={HeaderRight} alt="" />
					</div>
				</div>
	
				<BeforeAfter product={step.id} beforeImg={step.beforeImg} afterImg={step.afterImg} description={step.description}/>
	
				<p className="NaturalLook__description">
					<span className="NaturalLook__description-title">What it does: </span>
					{step.description}
				</p>
	
				{step.choosing ? 
					<p className="NaturalLook__procedure">
						<span className="NaturalLook__description-title">Tips for choosing a product: </span>
						{step.choosing}
					</p> : ""}
	
				<p className="NaturalLook__procedure">
					<span className="NaturalLook__description-title">Tips for applying: </span>
					{step.procedure}
				</p>
	
				{step.products ? 
					<div className="NaturalLook__procedure">
						<span className="NaturalLook__description-title">Products I Used: </span>
						<ul>{BuildProductList(step.products)}</ul>
					</div> : ""}

				{step.photos ? 
					<div className="NaturalLook__procedure">
						<span className="NaturalLook__description-title">Photos: </span>
						<ul className="NaturalLook__detail-photos">{BuildPhotoList(step.photos)}</ul>
					</div> : ""}

				{step.video ? <step.video /> : ""}
			</section>
		)
		)}

	</main>
);

export default NaturalLook;
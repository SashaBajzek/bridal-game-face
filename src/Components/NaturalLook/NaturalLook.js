import React from 'react';
import BeforeAfter from '../BeforeAfter/BeforeAfter';
import './NaturalLook.css';

import OverallBefore from './NaturalLookPhotos/Overall-Before.jpg';
import OverallAfter from './NaturalLookPhotos/Finished2.jpg';
import FoundationBefore from './NaturalLookPhotos/Foundation-Before.jpg';
import FoundationAfter from './NaturalLookPhotos/Foundation-After.jpg';
import ConcealerAfter from './NaturalLookPhotos/Concealer-After.jpg';
import PowderAfter from './NaturalLookPhotos/Powder-After.jpg';
import BlushAfter from './NaturalLookPhotos/Blush-After.jpg';
import HighlightAfter from './NaturalLookPhotos/Highlight-After.jpg';
import BrowsAfter from './NaturalLookPhotos/Brows-After.jpg';
import TransitionAfter from './NaturalLookPhotos/Shadow-Transition-After.jpg';
import OuterAfter from './NaturalLookPhotos/Shadow-Outer-After.jpg';
import LidAfter from './NaturalLookPhotos/Shadow-Lid-After.jpg';
import UnderAfter from './NaturalLookPhotos/Shadow-Under-After.jpg';
import MascaraAfter from './NaturalLookPhotos/Mascara-After.jpg';
import LipstickAfter from './NaturalLookPhotos/Lips-After.jpg';

const steps = [
	{
		id: "Foundation",
		beforeImg: FoundationBefore,
		afterImg: FoundationAfter,
		description: "Foundation evens out your skintone and gives your skin a blurred 'airbrush' effect."
	},
	{
		id: "Concealer",
		beforeImg: FoundationAfter,
		afterImg: ConcealerAfter,
		description: "Concealer brightens dark undereye circles and covers blemishes."
	},
	{
		id: "Powder",
		beforeImg: ConcealerAfter,
		afterImg: PowderAfter,
		description: "Powder eliminates shine from oily skin and sets foundation/concealer."
	},
	{
		id: "Blush",
		beforeImg: PowderAfter,
		afterImg: BlushAfter,
		description: "Blush keeps you from getting washed out in flash photos."
	},
	{
		id: "Bronzer and highlighter",
		beforeImg: BlushAfter,
		afterImg: HighlightAfter,
		description: "Bronzer and highlighter keep you from getting washed out in flash photos."
	},
	{
		id: "Brow pencil",
		beforeImg: HighlightAfter,
		afterImg: BrowsAfter,
		description: "Filling in brows gives them more definition in flash photos."
	},
	{
		id: "Brown eyeshadow in crease of eye",
		beforeImg: BrowsAfter,
		afterImg: TransitionAfter,
		description: "Light brown eyeshadow in crease to add depth to eyes."
	},
	{
		id: "Brown eyeshadow on outer third of eyelid",
		beforeImg: TransitionAfter,
		afterImg: OuterAfter,
		description: "Brown eyeshadow on outer third of eyelid adds depth to your eyes."
	},
	{
		id: "Champagne eyeshadow on lid",
		beforeImg: OuterAfter,
		afterImg: LidAfter,
		description: "Champagne eyeshadow on the lid brightens your eyes."
	},
	{
		id: "Brown eyeshadow under eye",
		beforeImg: LidAfter,
		afterImg: UnderAfter,
		description: "Light brown eyeshadow along lower lashline makes your eyes appear bigger."
	},
	{
		id: "Mascara",
		beforeImg: UnderAfter,
		afterImg: MascaraAfter,
		description: "Waterproof mascara helps to open up your eyes."
	},
	{
		id: "Lipstick",
		beforeImg: MascaraAfter,
		afterImg: LipstickAfter,
		description: "Lipstick adds an even coloring to your lips"
	}
];


const NaturalLook = () => (
	<main className="naturalLook">
		<h2>Natural Bridal Look</h2>
		<p>Natural Look is the bare minimum for looking polished on your wedding day. It is a great look for those who do not like the look of makeup on their face at all.</p>
		<p>Slide or use arrow keys to compare the before and after images</p>
	
		<BeforeAfter product="overall" beforeImg={OverallBefore} afterImg={OverallAfter} description="Putting on my 'natural' bridal game face."/>
	
		{steps.map(step => (
			<section key={step.id} >
				<h3 className="NaturalLook__heading">{step.id}</h3>
				<BeforeAfter product={step.id} beforeImg= {step.beforeImg} afterImg={step.afterImg} description={step.description}/>
				<p className="NaturalLook__description"><span className="NaturalLook__description-title">What it does: </span>{step.description}</p>
				{step.video ? <step.video /> : ""}
			</section>
		)
		)}

	</main>
);

export default NaturalLook;
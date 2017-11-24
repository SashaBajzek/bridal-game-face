import React from 'react';
import BeforeAfter from '../BeforeAfter/BeforeAfter';
import '../BeforeAfter/BeforeAfter.css';

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
		description: "Foundation evens out skintone and gives a blurred 'airbrush' effect."
	},
	{
		id: "Concealer",
		beforeImg: FoundationAfter,
		afterImg: ConcealerAfter,
		description: "Concealer brightens dark undereye circles and better covers blemishes."
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
		description: "Blush on top of cheekbones."
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
		description: "Brown eyeshadow in the hollow of your eye."
	},
	{
		id: "Brown eyeshadow on outer third of eyelid",
		beforeImg: TransitionAfter,
		afterImg: OuterAfter,
		description: "Brown eyeshadow on outer third of eyelid."
	},
	{
		id: "Champagne eyeshadow on lid",
		beforeImg: OuterAfter,
		afterImg: LidAfter,
		description: "Apply champagne eyeshadow on eyelid."
	},
	{
		id: "Brown eyeshadow under eye",
		beforeImg: LidAfter,
		afterImg: UnderAfter,
		description: "Brown eyeshadow under eye."
	},
	{
		id: "Mascara",
		beforeImg: UnderAfter,
		afterImg: MascaraAfter,
		description: "Apply waterproof mascara from roots of lashes to end."
	},
	{
		id: "Lipstick",
		beforeImg: MascaraAfter,
		afterImg: LipstickAfter,
		description: "Lipstick"
	}
];


const NaturalLook = () => (
	<div className="naturalLook">
		<h2>Natural Bridal Look</h2>
		<p>Natural Look is the bare minimum for looking polished on your wedding day. It is a great look for those who do not like the look of makeup on their face at all.</p>
		<h3>Slide or use arrow keys to compare the before and after images</h3>
	
		<BeforeAfter product="overall" beforeImg={OverallBefore} afterImg={OverallAfter} description="Putting on my 'natural' bridal game face."/>
	
		{steps.map(step => 
			<BeforeAfter key={step.id} product={step.id} beforeImg={step.beforeImg} afterImg={step.afterImg} description={step.description}/>
		)}

	</div>
);

export default NaturalLook;
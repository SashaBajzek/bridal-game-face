import React from 'react';
import BeforeAfter from '../BeforeAfter/BeforeAfter';
import '../BeforeAfter/BeforeAfter.css';

import OverallBefore from "./FullLookPhotos/F-Overall-Before.jpg";
import OverallAfter from "./FullLookPhotos/F-Overall-After.jpg";
import FoundationAfter from "./FullLookPhotos/F-Foundation-After.jpg";
import ConcealerAfter from "./FullLookPhotos/F-Concealer-After.jpg";
import PowderAfter from "./FullLookPhotos/F-Powder-After.jpg";
import BrowsAfter from "./FullLookPhotos/F-Brows-After.jpg";
import BronzerAfter from "./FullLookPhotos/F-Bronzer-After.jpg";
import BlushAfter from "./FullLookPhotos/F-Blush-After.jpg";
import HighlightAfter from "./FullLookPhotos/F-Highlight-After.jpg";
import PeachAfter from "./FullLookPhotos/F-Peach-After.jpg";
import BeachesAfter from "./FullLookPhotos/F-Beaches-After.jpg";
import PinkAfter from "./FullLookPhotos/F-Pink-After.jpg";
import TanAfter from "./FullLookPhotos/F-Tan-After.jpg";
import ChampagneAfter from "./FullLookPhotos/F-AllThatGlitters-After.jpg";
import ChampagnePopAfter from "./FullLookPhotos/F-ChampagnePop-After.jpg";
import GoldAfter from "./FullLookPhotos/F-AmberLights-After.jpg";
import UnderBeachAfter from "./FullLookPhotos/F-UnderBeach-After.jpg";
import UnderTanAfter from "./FullLookPhotos/F-UnderTan-After.jpg";
import BlacktrackAfter from "./FullLookPhotos/F-Blacktrack-After.jpg";
import CarbonAfter from "./FullLookPhotos/F-Carbon-After.jpg";
import MascaraAfter from "./FullLookPhotos/F-Mascara-After.jpg";
import LinerAfter from "./FullLookPhotos/F-Liner-After.jpg";

const steps = [
	{
		id: "Foundation",
		beforeImg: OverallBefore,
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
		id: "Brows",
		beforeImg: PowderAfter,
		afterImg: BrowsAfter,
		description: "Filling in brows gives them more definition in flash photos."
	},
	{
		id: "Bronzer",
		beforeImg: OverallAfter,
		afterImg: BronzerAfter,
		description: "Bronzer keeps you from getting washed out in photos."
	},
	{
		id: "Blush",
		beforeImg: BronzerAfter,
		afterImg: BlushAfter,
		description: "Blush keeps you from getting washed out in flash photos."
	},
	{
		id: "Highlighter",
		beforeImg: BlushAfter,
		afterImg: HighlightAfter,
		description: "Highlight gives you a bridal glow."
	},
	{
		id: "Peach eyeshadow",
		beforeImg: HighlightAfter,
		afterImg: PeachAfter,
		description: "Peach eyeshadow in crease."
	},
	{
		id: "Light brown eyeshadow",
		beforeImg: PeachAfter,
		afterImg: BeachesAfter,
		description: "Light brown eyeshadow in crease."
	},
	{
		id: "Pink eyeshadow",
		beforeImg: BeachesAfter,
		afterImg: PinkAfter,
		description: "Pink eyeshadow in crease."
	},
	{
		id: "Darker brown eyeshadow",
		beforeImg: PinkAfter,
		afterImg: TanAfter,
		description: "Darker brown eyeshadow in outer V."
	},
	{
		id: "Champagne eyeshadow",
		beforeImg: TanAfter,
		afterImg: ChampagneAfter,
		description: "Champagne eyeshadow on lid."
	},
	{
		id: "Highlight eyeshadow",
		beforeImg: ChampagneAfter,
		afterImg: ChampagnePopAfter,
		description: "Highlight eyeshadow on inner corner of eye."
	},
	{
		id: "Gold eyeshadow",
		beforeImg: ChampagnePopAfter,
		afterImg: GoldAfter,
		description: "Gold eyeshadow on outer half of eyelid."
	},
	{
		id: "Light brown eyeshadow under eye",
		beforeImg: GoldAfter,
		afterImg: UnderBeachAfter,
		description: "Light brown eyeshadow outer half of lower eyelid."
	},
	{
		id: "Darker brown eyeshadow under eye",
		beforeImg: UnderBeachAfter,
		afterImg: UnderTanAfter,
		description: "Darker brown eyeshadow outer half of lower eyelid."
	},
	{
		id: "Gel eyeliner",
		beforeImg: UnderTanAfter,
		afterImg: BlacktrackAfter,
		description: "Gel eyeliner to define the eyes."
	},
	{
		id: "Black eyeshadow",
		beforeImg: BlacktrackAfter,
		afterImg: CarbonAfter,
		description: "Black eyeshadow over the gel liner to deepen the color and help it last."
	},
	{
		id: "Mascara",
		beforeImg: CarbonAfter,
		afterImg: MascaraAfter,
		description: "Waterproof mascara from roots of lashes up."
	},
	{
		id: "Lip Liner",
		beforeImg: MascaraAfter,
		afterImg: LinerAfter,
		description: "Apply lipliner to help lipstick stay longer."
	},
	{
		id: "Lipstick",
		beforeImg: LinerAfter,
		afterImg: OverallAfter,
		description: "Lipstick"
	}
]

const FullLook = () => (
	<main className="fullLook">
		<h2>Full Bridal Look</h2>
		<p>Full Look shows from start to finish, how to apply a full face of makeup that will enhance your features.</p>
		<h3>Slide or use arrow keys to compare the before and after images</h3>
	
		<BeforeAfter product="overall" beforeImg= {OverallBefore} afterImg={OverallAfter} description="Putting on my bridal game face."/>
	
		{steps.map(step => 
			<BeforeAfter key={step.id} product={step.id} beforeImg= {step.beforeImg} afterImg={step.afterImg} description={step.description}/>
		)}
	</main>
);

export default FullLook;
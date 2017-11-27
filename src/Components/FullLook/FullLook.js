import React from 'react';
import BeforeAfter from '../BeforeAfter/BeforeAfter';
import './FullLook.css';

import ConcealerVideo from '../Videos/ConcealerVideo/ConcealerVideo';
import HighlightVideo from '../Videos/HighlightVideo/HighlightVideo';
import BrowVideo from '../Videos/BrowVideo/BrowVideo';
import PowderVideo from '../Videos/PowderVideo/PowderVideo';
import BronzerVideo from '../Videos/BronzerVideo/BronzerVideo';
import BlushVideo from '../Videos/BlushVideo/BlushVideo';
import PeachVideo from '../Videos/PeachVideo/PeachVideo';
import LightBrownVideo from '../Videos/LightBrownVideo/LightBrownVideo';
import PinkVideo from '../Videos/PinkVideo/PinkVideo';
import OrbVideo from '../Videos/OrbVideo/OrbVideo';
import TanVideo from '../Videos/TanVideo/TanVideo';
import ChampagneVideo from '../Videos/ChampagneVideo/ChampagneVideo';
import GoldVideo from '../Videos/GoldVideo/GoldVideo';
import ChampagnePopVideo from '../Videos/ChampagnePopVideo/ChampagnePopVideo';
import LightBrownUnderVideo from '../Videos/LightBrownUnderVideo/LightBrownUnderVideo';
import DarkBrownUnderVideo from '../Videos/DarkBrownUnderVideo/DarkBrownUnderVideo';
import EyelinerVideo from '../Videos/EyelinerVideo/EyelinerVideo';
import CarbonVideo from '../Videos/CarbonVideo/CarbonVideo';
import MascaraVideo from '../Videos/MascaraVideo/MascaraVideo';
import LipLinerVideo from '../Videos/LipLinerVideo/LipLinerVideo';
import LipstickVideo from '../Videos/LipstickVideo/LipstickVideo';


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
import OrbAfter from "./FullLookPhotos/F-Orb-After.jpg";
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
		description: "Concealer brightens dark undereye circles and better covers blemishes.",
		video: ConcealerVideo
	},
	{
		id: "Powder",
		beforeImg: ConcealerAfter,
		afterImg: PowderAfter,
		description: "Powder eliminates shine from oily skin and sets foundation/concealer.",
		video: PowderVideo
	},
	{
		id: "Brows",
		beforeImg: PowderAfter,
		afterImg: BrowsAfter,
		description: "Filling in brows gives them more definition in flash photos.",
		video: BrowVideo
	},
	{
		id: "Bronzer",
		beforeImg: BrowsAfter,
		afterImg: BronzerAfter,
		description: "Bronzer keeps you from getting washed out in photos.",
		video: BronzerVideo
	},
	{
		id: "Blush",
		beforeImg: BronzerAfter,
		afterImg: BlushAfter,
		description: "Blush keeps you from getting washed out in flash photos.",
		video: BlushVideo
	},
	{
		id: "Highlighter",
		beforeImg: BlushAfter,
		afterImg: HighlightAfter,
		description: "Highlight gives you a bridal glow.",
		video: HighlightVideo
	},
	{
		id: "Peach eyeshadow",
		beforeImg: HighlightAfter,
		afterImg: PeachAfter,
		description: "Peach eyeshadow in crease.",
		video: PeachVideo
	},
	{
		id: "Light brown eyeshadow",
		beforeImg: PeachAfter,
		afterImg: BeachesAfter,
		description: "Light brown eyeshadow in crease.",
		video: LightBrownVideo
	},
	{
		id: "Pink eyeshadow",
		beforeImg: BeachesAfter,
		afterImg: PinkAfter,
		description: "Pink eyeshadow in crease.",
		video: PinkVideo
	},
	{
		id: "Skin tone eyeshadow",
		beforeImg: PinkAfter,
		afterImg: OrbAfter,
		description: "Skintone eyeshadow under brow",
		video: OrbVideo
	},
	{
		id: "Darker brown eyeshadow",
		beforeImg: OrbAfter,
		afterImg: TanAfter,
		description: "Darker brown eyeshadow in outer V.",
		video: TanVideo
	},
	{
		id: "Champagne eyeshadow",
		beforeImg: TanAfter,
		afterImg: ChampagneAfter,
		description: "Champagne eyeshadow on lid.",
		video: ChampagneVideo
	},
	{
		id: "Gold eyeshadow",
		beforeImg: ChampagneAfter,
		afterImg: GoldAfter,
		description: "Gold eyeshadow on outer half of eyelid.",
		video: GoldVideo
	},
	{
		id: "Highlight eyeshadow",
		beforeImg: GoldAfter,
		afterImg: ChampagnePopAfter,
		description: "Highlight eyeshadow on inner corner of eye.",
		video: ChampagnePopVideo
	},
	{
		id: "Light brown eyeshadow under eye",
		beforeImg: ChampagnePopAfter,
		afterImg: UnderBeachAfter,
		description: "Light brown eyeshadow outer half of lower eyelid.",
		video: LightBrownUnderVideo
	},
	{
		id: "Darker brown eyeshadow under eye",
		beforeImg: UnderBeachAfter,
		afterImg: UnderTanAfter,
		description: "Darker brown eyeshadow outer half of lower eyelid.",
		video: DarkBrownUnderVideo
	},
	{
		id: "Gel eyeliner",
		beforeImg: UnderTanAfter,
		afterImg: BlacktrackAfter,
		description: "Gel eyeliner to define the eyes.",
		video: EyelinerVideo
	},
	{
		id: "Black eyeshadow",
		beforeImg: BlacktrackAfter,
		afterImg: CarbonAfter,
		description: "Black eyeshadow over the gel liner to deepen the color and help it last.",
		video: CarbonVideo
	},
	{
		id: "Mascara",
		beforeImg: CarbonAfter,
		afterImg: MascaraAfter,
		description: "Waterproof mascara from roots of lashes up.",
		video: MascaraVideo
	},
	{
		id: "Lip Liner",
		beforeImg: MascaraAfter,
		afterImg: LinerAfter,
		description: "Apply lipliner to help lipstick stay longer.",
		video: LipLinerVideo
	},
	{
		id: "Lipstick",
		beforeImg: LinerAfter,
		afterImg: OverallAfter,
		description: "Lipstick",
		video: LipstickVideo
	}
]

const FullLook = () => (
	<main className="fullLook">
		<h2>Full Bridal Look</h2>
		<p>Full Look shows from start to finish, how to apply a full face of makeup that will enhance your features.</p>
		<h3>Slide or use arrow keys to compare the before and after images</h3>
	
		<BeforeAfter product="overall" beforeImg= {OverallBefore} afterImg={OverallAfter} description="Putting on my bridal game face."/>
	
		{steps.map(step => (
			<section key={step.id} >
				<h3 className="FullLook__heading">{step.id}</h3>
				<BeforeAfter product={step.id} beforeImg= {step.beforeImg} afterImg={step.afterImg} description={step.description}/>
				<p>{step.description}</p>
				{step.video ? <step.video /> : ""}
			</section>
		)
		)}
	</main>
);

export default FullLook;
import React from 'react';
import BeforeAfter from '../BeforeAfter/BeforeAfter';
import './FullLook.css';

import HeaderRight from '../../Photos/Backgrounds/HeaderArt-Right.png';
import HeaderLeft from '../../Photos/Backgrounds/HeaderArt-Left.png';

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
		description: "Foundation evens out your skintone and gives your skin a blurred 'airbrush' effect.",
		procedure: "You can apply your foundation with a brush, sponge or clean hands. Start applying in the middle of your face and work outwards. Start with light layers and build up where you have more discoloration. If you are using a primer, apply primer first, then foundation.",
		choosing: "Choose a foundation based on your skin type: oily, dry, combination, or normal. Choose the color based on how well it matches your neck, not how it matches your hand.",
		products: [
			{
				name: "MAKE UP FOR EVER Ultra HD Foundation",
				link: "https://www.sephora.com/product/ultra-hd-invisible-cover-foundation-P398321?skuId=1708957&icid2=products%20grid:p398321"
			}
		]
	},
	{
		id: "Concealer",
		beforeImg: FoundationAfter,
		afterImg: ConcealerAfter,
		description: "Concealer brightens dark undereye circles and covers blemishes.",
		video: ConcealerVideo,
		procedure: "Apply concealer over dark undereye circles, blemishes, and areas of redness or discoloration that foundation did not cover well. Using your finger works well for patting in concealer as the heat from your finger helps the concealer sink into skin. For undereyes, pat in concealer gently, using your ring finger as it's your weakest. Pat in both directions under eyes to avoid creasing.",
		products: [
			{
				name: "NARS Radiant Creamy Concealer",
				link: "https://www.sephora.com/product/radiant-creamy-concealer-P377873?skuId=1478403&icid2=products%20grid:p377873"
			}
		]
	},
	{
		id: "Powder",
		beforeImg: ConcealerAfter,
		afterImg: PowderAfter,
		description: "Powder eliminates shine from oily skin and sets foundation/concealer.",
		video: PowderVideo,
		procedure: "Apply powder under eyes lightly to set your concealer. To control shine from oil throughout the day, apply across the middle of your forhead, down your nose, and center of your chin. Apply anywhere else on your face as needed to control oil or set your foundation.",
		choosing: "Check the ingredients of setting powders and choose one with a low silica content, as silica can cause a white cast or flash back in flash photography.",
		products: [
			{
				name: "Laura Mercier Translucent Loose Setting Powder",
				link: "https://www.sephora.com/product/translucent-loose-setting-powder-P109908?skuId=870618"
			}
		]
	},
	{
		id: "Brows",
		beforeImg: PowderAfter,
		afterImg: BrowsAfter,
		description: "Filling in brows gives them more definition in flash photos.",
		video: BrowVideo,
		procedure: "Start out by combing your brows upwards and outwards. Then fill in your brows following their natural shape, filling in any bald spots or gaps, brushing through with a spooly frequently to blend. A tip for figuring out a good brow shape is to hold a pencil vertically from the side of your nostril to your brows. That should be how far in your brows should go. Next, tilt the pencil so it goes from the side of your nostril to the center of your eye. Where it crosses your brow is where the top of the arch shape should be. Finally, hold the pencil from the side of your nostril to the end of your eye. Where it touches your brow is where the tail of your brow should end.",
		choosing: "Brow products come in three 'flavors': powder, pencil and pomade/gel. Powder is the lightest and most natural looking, pencil is second easiest and great for defining your natural shape, and pomade/gel requires the most precision and is great for redefining your brow shape. Tinted brow gel is a hybrid option that works like mascara for your brows, darkening your fine brow hairs to help brows look more full. If you have unruly brows, finishing with a clear brow gel works like hairspray for your brows, locking in the shape after you comb through them.",
		products: [
			{
				name: "Anastasia Beverly Hills Brow Wiz in Soft Brown",
				link: "https://www.sephora.com/product/brow-wiz-P202633?skuId=1488337"
			}
		]
	},
	{
		id: "Bronzer",
		beforeImg: BrowsAfter,
		afterImg: BronzerAfter,
		description: "Bronzer keeps you from getting washed out in photos.",
		video: BronzerVideo,
		procedure: "Apply bronzer across your hairline, temples, under your cheekbones, and under your jawline.",
		choosing: "Finding a good bronzer color can be very difficult. Be patient and try many of them! Common problems are bronzer looking too orange or too muddy looking. Choosing an ashy, grey undertoned brown color can help with that.",
		products: [
			{
				name: "Bobbi Brown Bronzer in Golden Light",
				link: "https://www.sephora.com/product/bronzing-powder-P270548?skuId=1287986"
			}
		]
	},
	{
		id: "Blush",
		beforeImg: BronzerAfter,
		afterImg: BlushAfter,
		description: "Blush keeps you from getting washed out in flash photos.",
		video: BlushVideo,
		procedure: "Apply blush on your cheekbones when you are making a straight face. Many people smile to apply blush to the apples of their cheeks, but when they stop smiling, the color drops. So apply blush when you are making a normal face. Start at the back of your cheekbone by your hairline and work in towards your nose. Stop your blush below the middle of your eye. If it looks too strong, first check your blush in a flash photo. Flash can wash you out and having the extra blush will be good to keep definition in your face. If it looks too strong with flash, use some of your setting powder or a little of your foundation to take down the color.",
		products: [
			{
				name: "MAC Powder Blush in Gingerly",
				link: "https://www.maccosmetics.com/product/13842/329/products/makeup/face/blush-bronzer/powder-blush#/shade/Gingerly"
			},
			{
				name: "MAC Powder Blush in Fleur Power",
				link: "https://www.maccosmetics.com/product/13842/329/products/makeup/face/blush-bronzer/powder-blush#/shade/Fleur_Power"
			}
		]
	},
	{
		id: "Highlighter",
		beforeImg: BlushAfter,
		afterImg: HighlightAfter,
		description: "Highlight gives you a bridal glow.",
		video: HighlightVideo,
		procedure: "Apply highlighter on the very top of your cheekbones. To make your lips appear fuller, add some to your cupid's bow, the millimeter just above the middle of your top lip.",
		products: [
			{
				name: "Kevyn Aucoin The Celestial Highlighting Powder in Candlelight",
				link: "https://www.sephora.com/product/the-celestial-powder-P393954?skuId=1697283"
			}
		]
	},
	{
		id: "Peach eyeshadow",
		beforeImg: HighlightAfter,
		afterImg: PeachAfter,
		description: "Peach eyeshadow in crease to add depth to eyes.",
		video: PeachVideo,
		procedure: "Before starting eyeshadow application, apply a thin layer of eyeshadow primer all over your eyelid. Allow it to set for a minute. Then, using a fluffy brush and a matte (no glitter) eyeshadow that is one shade darker than your skintone, go back and forth in the crease of your eye to add and blend out the color.",
		products: [
			{
				name: "NARS Pro-Prime Smudge Proof Eyeshadow Base",
				link: "https://www.sephora.com/product/pro-prime-smudge-proof-eyeshadow-base-P261211?skuId=1236843&icid2=products%20grid:p261211"
			},
			{
				name: "Makeup Geek Eyeshadow in Peach Smoothie",
				link: "https://www.makeupgeek.com/makeup-geek-eyeshadow-pan-peach-smoothie.html"
			}
		]
	},
	{
		id: "Light brown eyeshadow",
		beforeImg: PeachAfter,
		afterImg: BeachesAfter,
		description: "Light brown eyeshadow in crease to add depth to eyes.",
		video: LightBrownVideo,
		procedure: "Using a slightly darker matte (no glitter) brown shade and the same fluffy brush apply the color more concentrated in the depth of your crease. Blend back and forth again to blend it out.",
		products: [
			{
				name: "Makeup Geek Eyeshadow in Creme Brule",
				link: "https://www.makeupgeek.com/makeup-geek-eyeshadow-pan-creme-brulee.html"
			}
		]
	},
	{
		id: "Pink eyeshadow",
		beforeImg: BeachesAfter,
		afterImg: PinkAfter,
		description: "Pink eyeshadow in crease.",
		video: PinkVideo,
		procedure: "Apply a small amount of a pink shade on the top part of your crease. This adds a rosy, romantic tone to your eyeshadow look.",
		products: [
			{
				name: "Makeup Geek Eyeshadow in Cupcake",
				link: "https://www.makeupgeek.com/makeup-geek-eyeshadow-pan-cupcake.html"
			}
		]
	},
	{
		id: "Skin tone eyeshadow",
		beforeImg: PinkAfter,
		afterImg: OrbAfter,
		description: "Skintone eyeshadow under brow to lift brow and blend eyeshadow seamlessly.",
		video: OrbVideo,
		procedure: "Use a matte (no glitter) shade that matches your skintone to highlight under your eyebrow and blend the edges of the color you have put in your crease. You want to blend out the edges so there are no harsh lines and everything looks seamless. Optionally, use a shimmer shade lightly below your brow to add some shine.",
		products: [
			{
				name: "MAC Eyeshadow in Orb",
				link: "https://www.maccosmetics.com/product/13840/363/products/makeup/eyes/shadow/eye-shadow#/shade/Orb"
			}
		]
	},
	{
		id: "Darker brown eyeshadow",
		beforeImg: OrbAfter,
		afterImg: TanAfter,
		description: "Darker brown eyeshadow in outer V adds depth to your eyes.",
		video: TanVideo,
		procedure: "Using your darkest matte brown shade and a smaller fluffy brush, apply the color in a 'V' shape at the outside of your eye. Keep the color concentrated on the outer third of your eye and blend it out gently into the crease. This darker shade will give you a bit of a cat eye effect and make your eyes appear bigger.",
		products: [
			{
				name: "Makeup Geek Eyeshadow in Tan Lines",
				link: "https://www.makeupgeek.com/makeup-geek-eyeshadow-pan-tan-lines.html"
			}
		]
	},
	{
		id: "Champagne eyeshadow",
		beforeImg: TanAfter,
		afterImg: ChampagneAfter,
		description: "Champagne eyeshadow on the lid brightens your eyes.",
		video: ChampagneVideo,
		procedure: "Choose a shimmery champange color and apply across the mobile part of your eyelid.",
		products: [
			{
				name: "MAC Eyeshadow in All That Glitters",
				link: "https://www.maccosmetics.com/product/13840/363/products/makeup/eyes/shadow/eye-shadow#/shade/All_That_Glitters"
			}
		]
	},
	{
		id: "Gold eyeshadow",
		beforeImg: ChampagneAfter,
		afterImg: GoldAfter,
		description: "Gold eyeshadow on outer half of eyelid adds more interest to the eye look.",
		video: GoldVideo,
		procedure: "To add more interest to the look, choose a bronzy, gold eyeshadow color and apply it across the outer half of your mobile eyelid. After applying it, bring back the big fluffy brush and brushing back and forth at the middle of your mobile lid, mix the gold and champagne colors to make a seamless gradient in the middle. Finally, blend back and forth in the crease again to make everything smooth.",
		products: [
			{
				name: "MAC Eyeshadow in Amber Lights",
				link: "https://www.maccosmetics.com/product/13840/363/products/makeup/eyes/shadow/eye-shadow#/shade/Amber_Lights"
			}
		]
	},
	{
		id: "Highlight eyeshadow",
		beforeImg: GoldAfter,
		afterImg: ChampagnePopAfter,
		description: "Highlight eyeshadow on inner corner of eye adds light to your eyes.",
		video: ChampagnePopVideo,
		procedure: "Use a small, precise brush to apply a light, frosty shade to the inner corner of your eye. Blend it out into the champagne on your lid, add some to the tear duct area, and apply some to the inner third of your lower lashline. This brings light to your eyes, drawing attention to them and making you look more awake and bright.",
		products: [
			{
				name: "Becca Shimmering Skin Perfector in Champagne Pop",
				link: "https://www.sephora.com/product/shimmering-skin-perfector-pressed-P381176?skuId=1721240&icid2=products%20grid:p381176"
			}
		]
	},
	{
		id: "Light brown eyeshadow under eye",
		beforeImg: ChampagnePopAfter,
		afterImg: UnderBeachAfter,
		description: "Light brown eyeshadow along lower lashline makes your eyes appear bigger.",
		video: LightBrownUnderVideo,
		procedure: "Using a pencil shaped brush, blend a light brown shade back and forth on your lower lashline.",
		products: [
			{
				name: "Makeup Geek Eyeshadow in Creme Brule",
				link: "https://www.makeupgeek.com/makeup-geek-eyeshadow-pan-creme-brulee.html"
			}
		]
	},
	{
		id: "Darker brown eyeshadow under eye",
		beforeImg: UnderBeachAfter,
		afterImg: UnderTanAfter,
		description: "Darker brown eyeshadow outer half of lower eyelid adds more definition.",
		video: DarkBrownUnderVideo,
		procedure: "Using a pencil shaped brush, blend a darker brown eyeshadow on the outer half of your lower lashline, staying close to your lashes. Then with no extra color on your brush, blend back and forth with the rest of your lashline so there is a seamless gradient of dark to light brown.",
		products: [
			{
				name: "Makeup Geek Eyeshadow in Tan Lines",
				link: "https://www.makeupgeek.com/makeup-geek-eyeshadow-pan-tan-lines.html"
			}
		]
	},
	{
		id: "Gel eyeliner",
		beforeImg: UnderTanAfter,
		afterImg: BlacktrackAfter,
		description: "Gel eyeliner defines the eyes.",
		video: EyelinerVideo,
		procedure: "Smoothly shaped eyeliner takes lots of practice, so be patient with yourself. Try to relax and trust yourself when you are applying eyeliner, it's just makeup and you can wash it off and start again as many times as you want to. Using a gel eyeliner and an angled brush gives you some working time and allows you to be very precise. Start by applying to the roots of your lashes, you do not want a gap of flesh tone between your eye and the eyeliner line. Take your time to make sure there are no gaps. Then build up the thickness of the line to the shape that you want. On my eye shape, I prefer having a thin line at the inner corner of my eye that continuously gets thicker as it runs to the outside of my eye. I just end the line at the end of my eye, but you can optionally add a kitten flick, or a small wing at the end. Do this by following the direction of your lower lashline, extending it up with your eyeliner, then coming back down to connect to your upper eyeliner.",
		products: [
			{
				name: "MAC Pro Longwear Fluidline in Blacktrack",
				link: "https://www.maccosmetics.com/product/13838/898/products/makeup/eyes/liner/pro-longwear-fluidline#/shade/Blacktrack"
			}
		]
	},
	{
		id: "Black eyeshadow",
		beforeImg: BlacktrackAfter,
		afterImg: CarbonAfter,
		description: "Black eyeshadow over the gel liner to deepen the color and help it last.",
		video: CarbonVideo,
		procedure: "Use a matte (no glitter) black eyeshadow to set and deepen your gel eyeliner. This is where you can perfect the smoothness of the edges of your gel eyeliner line. You can also feather and blend the edges of your eyeliner line to smoke it out.",
		products: [
			{
				name: "MAC Eyeshadow in Carbon",
				link: "https://www.maccosmetics.com/product/13840/363/products/makeup/eyes/shadow/eye-shadow#/shade/Carbon"
			}
		]
	},
	{
		id: "Mascara",
		beforeImg: CarbonAfter,
		afterImg: MascaraAfter,
		description: "Waterproof mascara helps to open up your eyes.",
		video: MascaraVideo,
		procedure: "First give your lashes a good curl. Try to curl your lashes at multiple places along their length to make an even shape, instead of just one place which can make them look kinked. Use a waterproof mascara, as they are waxy and will hold up to moisture and help lock in your curl all day. Apply mascara wiggling the wand at the roots of your lashes and out to the ends. Apply multiple coats if you wish, building up to the thickness and length that you want. If you have trouble with getting mascara on your eyelids, tilt your head back when you are applying mascara. Also, you can cut a curved shape into an index card and hold that against your eyelid when you apply mascara. Then you can apply mascara using the card as a backing to protect your eyeshadow look. Optionally, you can add false eyelashes at this stage. Individual lashes look very natural and are very comfortable to wear. If you get any mascara on your skin, use a qtip with some makeup remover to take it off.",
		products: [
			{
				name: "Kevyn Aucoin The Volume Mascara",
				link: "https://www.sephora.com/product/the-volume-mascara-P404812?skuId=1067792"
			}
		]
	},
	{
		id: "Lip Liner",
		beforeImg: MascaraAfter,
		afterImg: LinerAfter,
		description: "Apply lipliner to help lipstick stay longer.",
		video: LipLinerVideo,
		procedure: "First start with well moisturized lips. After your balm has had time to soak in, blot off any excess. Fill in the shape of your entire lips as lip liner will help to lock in your lipstick color. I chose a neutral rosy shade, but feel free to experiment with what you like!",
		products: [
			{
				name: "Charlotte Tilbury Lip Cheat in Pillow Talk",
				link: "https://www.beautylish.com/s/charlotte-tilbury-lip-cheat-pillow-talk"
			}
		]
	},
	{
		id: "Lipstick",
		beforeImg: LinerAfter,
		afterImg: OverallAfter,
		description: "Lipstick adds an even coloring to your lips",
		video: LipstickVideo,
		procedure: "Apply lipstick as you would a lip balm. Then blot it with a tissue and reapply a second time. If you make any mistakes, wipe it off with a qtip, then apply some concealer and powder over the mistake. To avoid getting any lipstick on your teeth, put your finger in your mouth and pull it out. It unfortunately looks very suggestive when you are doing it, but the ring of lipstick that comes off on your finger is the ring that would have ended up on your teeth. Finally, if you want to add lipgloss, apply it only to the center of your lips to avoid any gooping at the corners of your mouth.",
		products: [
			{
				name: "Burberry Kisses Lipstick in English Rose No. 17",
				link: "https://www.sephora.com/product/burberry-kisses-lipstick-P398985?skuId=1740505"
			}
		]
	}
]

const BuildProductList = (products) => (
	products.map(product => (
		<p><a key={product.name} href={product.link}>{product.name}</a></p>
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
					<img src={HeaderLeft} alt="Left gameplan" />
					<h3 className="FullLook__heading-text">{step.id}</h3>
					<img src={HeaderRight} alt="Right gameplan" />
				</div>
				<BeforeAfter product={step.id} beforeImg={step.beforeImg} afterImg={step.afterImg} description={step.description}/>
				<p className="FullLook__description"><span className="FullLook__description-title">What it does: </span>{step.description}</p>
				{step.choosing ? <p className="FullLook__procedure"><span className="FullLook__description-title">Tips for choosing a product: </span>{step.choosing}</p> : ""}
				<p className="FullLook__procedure"><span className="FullLook__description-title">Tips for applying: </span>{step.procedure}</p>
				{step.products ? 
					<p className="FullLook__procedure"><span className="FullLook__description-title">Products I Used: </span>{BuildProductList(step.products)}</p> : ""}
				{step.video ? <step.video /> : ""}
			</section>
		)
		)}
	</main>
);

export default FullLook;
//Before and After Photos
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

//Detail Photos
import FoundationDetails1 from './NaturalLookPhotos/DetailPhotos/Foundation-Detail.jpg';
import ConcealerDetails1 from './NaturalLookPhotos/DetailPhotos/Concealer-Detail1.jpg'; 
import ConcealerDetails2 from './NaturalLookPhotos/DetailPhotos/Concealer-Detail2.jpg';
import PowderDetails1 from './NaturalLookPhotos/DetailPhotos/Powder-Detail1.jpg'; 
import PowderDetails2 from './NaturalLookPhotos/DetailPhotos/Powder-Detail2.jpg'; 
import BlushDetails1 from './NaturalLookPhotos/DetailPhotos/Blush-Detail.jpg'; 
import BrowsDetails1 from './NaturalLookPhotos/DetailPhotos/Brows-Brush.jpg'; 
import BrowsDetails2 from './NaturalLookPhotos/DetailPhotos/Brows-Fill.jpg'; 
import OuterDetails1 from './NaturalLookPhotos/DetailPhotos/Shadow-Outer.jpg';
import LidDetails1 from './NaturalLookPhotos/DetailPhotos/Shadow-Lid1.jpg';
import LidDetails2 from './NaturalLookPhotos/DetailPhotos/Shadow-Lid3.jpg';
import MascaraDetails1 from './NaturalLookPhotos/DetailPhotos/Curl.jpg';
import UnderDetails1 from './NaturalLookPhotos/DetailPhotos/Shadow-Under.jpg';

//Detail Videos
import BronzerHighlightVideo from '../Videos/BronzerHighlightVideo/BronzerHighlightVideo';
import TransitionVideo from '../Videos/TransitionVideo/TransitionVideo';
import LipstickNaturalVideo from '../Videos/LipstickNaturalVideo/LipstickNaturalVideo';

const steps = [
	{
		id: "Foundation",
		beforeImg: FoundationBefore,
		afterImg: FoundationAfter,
		description: "Foundation evens out your skintone and gives your skin a blurred 'airbrush' effect.",
		procedure: "You can apply your foundation with a brush, sponge or clean hands. Start applying in the middle of your face and work outwards. Start with light layers and build up where you have more discoloration. If you are using a primer, apply primer first, then foundation.",
		choosing: "Choose a foundation based on your skin type: oily, dry, combination, or normal. Choose the color based on how well it matches your neck, not how it matches your hand.",
		products: [
			{
				name: "MAKE UP FOR EVER Ultra HD Foundation",
				link: "https://www.sephora.com/product/ultra-hd-invisible-cover-foundation-P398321?skuId=1708957&icid2=products%20grid:p398321"
			}
		],
		photos: [
			{
				name: FoundationDetails1,
				caption: "Here is my foundation"
			}
		]
	},
	{
		id: "Concealer",
		beforeImg: FoundationAfter,
		afterImg: ConcealerAfter,
		description: "Concealer brightens dark undereye circles and covers blemishes.",
		procedure: "Apply concealer over dark undereye circles, blemishes, and areas of redness or discoloration that foundation did not cover well. Using your finger works well for patting in concealer as the heat from your finger helps the concealer sink into skin. For undereyes, pat in concealer gently, using your ring finger as it's your weakest. Pat in both directions under eyes to avoid creasing.",
		products: [
			{
				name: "NARS Radiant Creamy Concealer",
				link: "https://www.sephora.com/product/radiant-creamy-concealer-P377873?skuId=1478403&icid2=products%20grid:p377873"
			}
		],
		photos: [
			{
				name: ConcealerDetails1,
				caption: "Applying concealer undereyes and on blemishes"
			},
			{
				name: ConcealerDetails2,
				caption: "Pat in concealer"
			}
		]
	},
	{
		id: "Powder",
		beforeImg: ConcealerAfter,
		afterImg: PowderAfter,
		description: "Powder eliminates shine from oily skin and sets foundation/concealer.",
		procedure: "Apply powder under eyes lightly to set your concealer. To control shine from oil throughout the day, apply across the middle of your forhead, down your nose, and center of your chin. Apply anywhere else on your face as needed to control oil or set your foundation.",
		choosing: "Check the ingredients of setting powders and choose one with a low silica content, as silica can cause a white cast or flash back in flash photography.",
		products: [
			{
				name: "Laura Mercier Translucent Loose Setting Powder",
				link: "https://www.sephora.com/product/translucent-loose-setting-powder-P109908?skuId=870618"
			}
		],
		photos: [
			{
				name: PowderDetails1,
				caption: "Choose a low silica content setting powder"
			},
			{
				name: PowderDetails2,
				caption: "Powder under eyes and T-zone"
			}
		]
	},
	{
		id: "Blush",
		beforeImg: PowderAfter,
		afterImg: BlushAfter,
		description: "Blush keeps you from getting washed out in flash photos.",
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
		],
		photos: [
			{
				name: BlushDetails1,
				caption: "Choose a peachy pink blush"
			}
		]
	},
	{
		id: "Bronzer and highlighter",
		beforeImg: BlushAfter,
		afterImg: HighlightAfter,
		description: "Bronzer and highlighter keep you from getting washed out in flash photos.",
		procedure: "Apply bronzer across your hairline, temples, under your cheekbones, and under your jawline. Apply highlighter on the very top of your cheekbones. To make your lips appear fuller, add some to your cupid's bow, the millimeter just above the middle of your top lip.",
		choosing: "Finding a good bronzer color can be very difficult. Be patient and try many of them! Common problems are bronzer looking too orange or too muddy looking. Choosing an ashy, grey undertoned brown color can help with that.",
		products: [
			{
				name: "Bobbi Brown Bronzer in Golden Light",
				link: "https://www.sephora.com/product/bronzing-powder-P270548?skuId=1287986"
			},
			{
				name: "Kevyn Aucoin The Celestial Highlighting Powder in Candlelight",
				link: "https://www.sephora.com/product/the-celestial-powder-P393954?skuId=1697283"
			}
		],
		video: BronzerHighlightVideo
	},
	{
		id: "Brow pencil",
		beforeImg: HighlightAfter,
		afterImg: BrowsAfter,
		description: "Filling in brows gives them more definition in flash photos.",
		procedure: "Start out by combing your brows upwards and outwards. Then fill in your brows following their natural shape, filling in any bald spots or gaps, brushing through with a spooly frequently to blend. A tip for figuring out a good brow shape is to hold a pencil vertically from the side of your nostril to your brows. That should be how far in your brows should go. Next, tilt the pencil so it goes from the side of your nostril to the center of your eye. Where it crosses your brow is where the top of the arch shape should be. Finally, hold the pencil from the side of your nostril to the end of your eye. Where it touches your brow is where the tail of your brow should end.",
		choosing: "Brow products come in three 'flavors': powder, pencil and pomade/gel. Powder is the lightest and most natural looking, pencil is second easiest and great for defining your natural shape, and pomade/gel requires the most precision and is great for redefining your brow shape. Tinted brow gel is a hybrid option that works like mascara for your brows, darkening your fine brow hairs to help brows look more full. If you have unruly brows, finishing with a clear brow gel works like hairspray for your brows, locking in the shape after you comb through them.",
		products: [
			{
				name: "Anastasia Beverly Hills Brow Wiz in Soft Brown",
				link: "https://www.sephora.com/product/brow-wiz-P202633?skuId=1488337"
			}
		],
		photos: [
			{
				name: BrowsDetails1,
				caption: "Comb your brows up and out"
			},
			{
				name: BrowsDetails2,
				caption: "Fill in brows with a powder or pencil"
			}
		]
	},
	{
		id: "Brown eyeshadow in crease of eye",
		beforeImg: BrowsAfter,
		afterImg: TransitionAfter,
		description: "Light brown eyeshadow in crease to add depth to eyes.",
		procedure: "Before starting eyeshadow application, apply a thin layer of eyeshadow primer all over your eyelid. Allow it to set for a minute. Using a fluffy brush and a matte (no glitter) light brown eyeshadow, go back and forth in the crease of your eye to add and blend out the color.",
		products: [
			{
				name: "NARS Pro-Prime Smudge Proof Eyeshadow Base",
				link: "https://www.sephora.com/product/pro-prime-smudge-proof-eyeshadow-base-P261211?skuId=1236843&icid2=products%20grid:p261211"
			},
			{
				name: "Makeup Geek Eyeshadow in Creme Brule",
				link: "https://www.makeupgeek.com/makeup-geek-eyeshadow-pan-creme-brulee.html"
			}
		],
		video: TransitionVideo
	},
	{
		id: "Brown eyeshadow on outer third of eyelid",
		beforeImg: TransitionAfter,
		afterImg: OuterAfter,
		description: "Brown eyeshadow on outer third of eyelid adds depth to your eyes.",
		procedure: "Using the same matte brown shade and a smaller fluffy brush, apply the color in a 'V' shape at the outside of your eye. Keep the color concentrated on the outer third of your eye and blend it out gently into the crease. This darker shade will give you a bit of a cat eye effect and make your eyes appear bigger.",
		products: [
			{
				name: "Makeup Geek Eyeshadow in Creme Brule",
				link: "https://www.makeupgeek.com/makeup-geek-eyeshadow-pan-creme-brulee.html"
			}
		],
		photos: [
			{
				name: OuterDetails1,
				caption: "Apply brown on outer third of eyelid"
			}
		]
	},
	{
		id: "Champagne eyeshadow on lid",
		beforeImg: OuterAfter,
		afterImg: LidAfter,
		description: "Champagne eyeshadow on the lid brightens your eyes.",
		procedure: "To add more interest to the look, choose a bronzy, gold eyeshadow color and apply it across the outer half of your mobile eyelid. After applying it, bring back the big fluffy brush and brushing back and forth at the middle of your mobile lid, mix the gold and champagne colors to make a seamless gradient in the middle. Finally, blend back and forth in the crease again to make everything smooth.",
		products: [
			{
				name: "MAC Eyeshadow in All That Glitters",
				link: "https://www.maccosmetics.com/product/13840/363/products/makeup/eyes/shadow/eye-shadow#/shade/All_That_Glitters"
			}
		],
		photos: [
			{
				name: LidDetails1,
				caption: "Choose any pink, peach, or champagne shade"
			},
			{
				name: LidDetails2,
				caption: "Apply color across the lid"
			}
		]
	},
	{
		id: "Brown eyeshadow under eye",
		beforeImg: LidAfter,
		afterImg: UnderAfter,
		description: "Light brown eyeshadow along lower lashline makes your eyes appear bigger.",
		procedure: "Using a pencil shaped brush, blend a light brown shade back and forth on your lower lashline.",
		products: [
			{
				name: "Makeup Geek Eyeshadow in Creme Brule",
				link: "https://www.makeupgeek.com/makeup-geek-eyeshadow-pan-creme-brulee.html"
			}
		],
		photos: [
			{
				name: UnderDetails1,
				caption: "Apply brown shadow on lower lashline"
			}
		]
	},
	{
		id: "Mascara",
		beforeImg: UnderAfter,
		afterImg: MascaraAfter,
		description: "Waterproof mascara helps to open up your eyes.",
		procedure: "First give your lashes a good curl. Try to curl your lashes at multiple places along their length to make an even shape, instead of just one place which can make them look kinked. Use a waterproof mascara, as they are waxy and will hold up to moisture and help lock in your curl all day. Apply mascara wiggling the wand at the roots of your lashes and out to the ends. Apply multiple coats if you wish, building up to the thickness and length that you want. If you have trouble with getting mascara on your eyelids, tilt your head back when you are applying mascara. Also, you can cut a curved shape into an index card and hold that against your eyelid when you apply mascara. Then you can apply mascara using the card as a backing to protect your eyeshadow look. Optionally, you can add false eyelashes at this stage. Individual lashes look very natural and are very comfortable to wear. If you get any mascara on your skin, use a qtip with some makeup remover to take it off.",
		products: [
			{
				name: "Kevyn Aucoin The Volume Mascara",
				link: "https://www.sephora.com/product/the-volume-mascara-P404812?skuId=1067792"
			}
		],
		photos: [
			{
				name: MascaraDetails1,
				caption: "Curl lashes before applying mascara"
			}
		]
	},
	{
		id: "Lipstick",
		beforeImg: MascaraAfter,
		afterImg: LipstickAfter,
		description: "Lipstick adds an even coloring to your lips",
		procedure: "Apply lipstick as you would a lip balm. Then blot it with a tissue and reapply a second time. If you make any mistakes, wipe it off with a qtip, then apply some concealer and powder over the mistake. To avoid getting any lipstick on your teeth, put your finger in your mouth and pull it out. It unfortunately looks very suggestive when you are doing it, but the ring of lipstick that comes off on your finger is the ring that would have ended up on your teeth. Finally, if you want to add lipgloss, apply it only to the center of your lips to avoid any gooping at the corners of your mouth.",
		products: [
			{
				name: "Burberry Kisses Lipstick in English Rose No. 17",
				link: "https://www.sephora.com/product/burberry-kisses-lipstick-P398985?skuId=1740505"
			}
		],
		video: LipstickNaturalVideo
	}
];

export default steps;
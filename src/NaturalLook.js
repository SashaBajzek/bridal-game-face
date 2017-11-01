import React from 'react';
import BeforeAfter from './BeforeAfter';
import './BeforeAfter.css';

const NaturalLook = () => (
	<div className="naturalLook">
		<h2>Natural Bridal Look</h2>
		<h3>Slide or use arrow keys to compare the before and after images</h3>
	
		<BeforeAfter product="overall" beforeImg="./photos/NaturalLook/Overall-Before.jpg" afterImg="./photos/NaturalLook/Finished2.jpg" description="Putting on my 'natural' bridal game face."/>

		<BeforeAfter product="foundation" beforeImg="./photos/NaturalLook/Foundation-Before.jpg" afterImg="./photos/NaturalLook/Foundation-After.jpg" description="Foundation evens out skintone and gives a blurred 'airbrush' effect."/>

		<BeforeAfter product="concealer" beforeImg="./photos/NaturalLook/Foundation-After.jpg" afterImg="./photos/NaturalLook/Concealer-After.jpg" description="Concealer brightens dark undereye circles and better covers blemishes."/>

		<BeforeAfter product="powder" beforeImg="./photos/NaturalLook/Concealer-After.jpg" afterImg="./photos/NaturalLook/Powder-After.jpg" description="Powder eliminates shine from oily skin and sets foundation/concealer."/>
	
		<BeforeAfter product="blush" beforeImg="./photos/NaturalLook/Concealer-After.jpg" afterImg="./photos/NaturalLook/Blush-After.jpg" description="Blush on top of cheekbones."/>
	
		<BeforeAfter product="bronzer and highlighter" beforeImg="./photos/NaturalLook/Blush-After.jpg" afterImg="./photos/NaturalLook/Highlight-After.jpg" description="Bronzer and highlighter keep you from getting washed out in flash photos."/>
	
		<BeforeAfter product="brow pencil" beforeImg="./photos/NaturalLook/Highlight-After.jpg" afterImg="./photos/NaturalLook/Brows-After.jpg" description="Filling in brows gives them more definition in flash photos."/>
	
		<BeforeAfter product="brown eyeshadow in crease of eye" beforeImg="./photos/NaturalLook/Brows-After.jpg" afterImg="./photos/NaturalLook/Shadow-Transition-After.jpg" description="Brown eyeshadow in the hollow of your eye."/>
	
		<BeforeAfter product="brown eyeshadow on outer third of eyelid" beforeImg="./photos/NaturalLook/Shadow-Transition-After.jpg" afterImg="./photos/NaturalLook/Shadow-Outer-After.jpg" description="Brown eyeshadow on outer third of eyelid."/>
	
		<BeforeAfter product="champagne eyeshadow on lid" beforeImg="./photos/NaturalLook/Shadow-Outer-After.jpg" afterImg="./photos/NaturalLook/Shadow-Lid-After.jpg" description="Apply champagne eyeshadow on eyelid."/>
	
		<BeforeAfter product="brown eyeshadow under eye" beforeImg="./photos/NaturalLook/Shadow-Lid-After.jpg" afterImg="./photos/NaturalLook/Shadow-Under-After.jpg" description="Brown eyeshadow under eye."/>
	
		<BeforeAfter product="mascara" beforeImg="./photos/NaturalLook/Shadow-Under-After.jpg" afterImg="./photos/NaturalLook/Mascara-After.jpg" description="Apply waterproof mascara from roots of lashes to end."/>
	
		<BeforeAfter product="lipstick" beforeImg="./photos/NaturalLook/Mascara-After.jpg" afterImg="./photos/NaturalLook/Lips-After.jpg" description="Lipstick"/>

	</div>
);

export default NaturalLook;
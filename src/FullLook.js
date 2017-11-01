import React from 'react';
import BeforeAfter from './BeforeAfter';
import './BeforeAfter.css';

const FullLook = () => (
	<div className="fullLook">
		<h2>Full Bridal Look</h2>
		<h3>Slide or use arrow keys to compare the before and after images</h3>
	
		<BeforeAfter product="overall" beforeImg="./photos/FullLook/F-Overall-Before.jpg" afterImg="./photos/FullLook/F-Overall-After.jpg" description="Putting on my bridal game face."/>
		
		<section>
			<BeforeAfter product="foundation" beforeImg="./photos/FullLook/F-Overall-Before.jpg" afterImg="./photos/FullLook/F-Foundation-After.jpg" description="Foundation evens out skintone and gives a blurred 'airbrush' effect."/>
			<div>
				<h5>Details</h5>
			</div>
		</section>

		<BeforeAfter product="concealer" beforeImg="./photos/FullLook/F-Foundation-After.jpg" afterImg="./photos/FullLook/F-Concealer-After.jpg" description="Concealer brightens dark undereye circles and better covers blemishes."/>

		<BeforeAfter product="powder" beforeImg="./photos/FullLook/F-Concealer-After.jpg" afterImg="./photos/FullLook/F-Powder-After.jpg" description="Powder eliminates shine from oily skin and sets foundation/concealer."/>
	
		<BeforeAfter product="brow pencil" beforeImg="./photos/FullLook/F-Powder-After.jpg" afterImg="./photos/FullLook/F-Brows-After.jpg" description="Filling in brows gives them more definition in flash photos."/>
	
		<BeforeAfter product="bronzer" beforeImg="./photos/FullLook/F-Brows-After.jpg" afterImg="./photos/FullLook/F-Bronzer-After.jpg" description="Bronzer keeps you from getting washed out in photos."/>
	
		<BeforeAfter product="blush" beforeImg="./photos/FullLook/F-Bronzer-After.jpg" afterImg="./photos/FullLook/F-Blush-After.jpg" description="Blush keeps you from getting washed out in flash photos."/>
	
		<BeforeAfter product="highlighter" beforeImg="./photos/FullLook/F-Blush-After.jpg" afterImg="./photos/FullLook/F-Highlight-After.jpg" description="Highlight gives you a bridal glow."/>
	
		<BeforeAfter product="peach eyeshadow" beforeImg="./photos/FullLook/F-Highlight-After.jpg" afterImg="./photos/FullLook/F-Peach-After.jpg" description="Peach eyeshadow in crease."/>
	
		<BeforeAfter product="light brown eyeshadow" beforeImg="./photos/FullLook/F-Peach-After.jpg" afterImg="./photos/FullLook/F-Beaches-After.jpg" description="Light brown eyeshadow in crease."/>
	
		<BeforeAfter product="pink eyeshadow" beforeImg="./photos/FullLook/F-Beaches-After.jpg" afterImg="./photos/FullLook/F-Pink-After.jpg" description="Pink eyeshadow in crease."/>
	
		<BeforeAfter product="darker brown eyeshadow" beforeImg="./photos/FullLook/F-Pink-After.jpg" afterImg="./photos/FullLook/F-Tan-After.jpg" description="Darker brown eyeshadow in outer V."/>
	
		<BeforeAfter product="champagne eyeshadow" beforeImg="./photos/FullLook/F-Tan-After.jpg" afterImg="./photos/FullLook/F-AllThatGlitters-After.jpg" description="Champagne eyeshadow on lid."/>
	
		<BeforeAfter product="highlight eyeshadow" beforeImg="./photos/FullLook/F-AllThatGlitters-After.jpg" afterImg="./photos/FullLook/F-ChampagnePop-After.jpg" description="Highlight eyeshadow on inner corner of eye."/>
	
		<BeforeAfter product="gold eyeshadow" beforeImg="./photos/FullLook/F-ChampagnePop-After.jpg" afterImg="./photos/FullLook/F-AmberLights-After.jpg" description="Gold eyeshadow on outer half of eyelid."/>
	
		<BeforeAfter product="light brown eyeshadow under eye" beforeImg="./photos/FullLook/F-AmberLights-After.jpg" afterImg="./photos/FullLook/F-UnderBeach-After.jpg" description="Light brown eyeshadow outer half of lower eyelid."/>
	
		<BeforeAfter product="darker brown eyeshadow under eye" beforeImg="./photos/FullLook/F-UnderBeach-After.jpg" afterImg="./photos/FullLook/F-UnderTan-After.jpg" description="Darker brown eyeshadow outer half of lower eyelid."/>
	
		<BeforeAfter product="gel eyeliner" beforeImg="./photos/FullLook/F-UnderTan-After.jpg" afterImg="./photos/FullLook/F-Blacktrack-After.jpg" description="Gel eyeliner to define the eyes."/>
	
		<BeforeAfter product="black eyeshadow" beforeImg="./photos/FullLook/F-Blacktrack-After.jpg" afterImg="./photos/FullLook/F-Carbon-After.jpg" description="Black eyeshadow over the gel liner to deepen the color and help it last."/>
	
		<BeforeAfter product="mascara" beforeImg="./photos/FullLook/F-Carbon-After.jpg" afterImg="./photos/FullLook/F-Mascara-After.jpg" description="Waterproof mascara from roots of lashes up."/>
	
		<BeforeAfter product="lip liner" beforeImg="./photos/FullLook/F-Mascara-After.jpg" afterImg="./photos/FullLook/F-Liner-After.jpg" description="Apply lipliner to help lipstick stay longer."/>
	
		<BeforeAfter product="lipstick" beforeImg="./photos/FullLook/F-Liner-After.jpg" afterImg="./photos/FullLook/F-Overall-After.jpg" description="Lipstick"/>
	
	</div>
);

export default FullLook;
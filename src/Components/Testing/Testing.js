import React from 'react';
import StopMotion from '../StopMotion/StopMotion';
import test1 from './TestingPhotos/IMG_6349.jpg';
import test2 from './TestingPhotos/IMG_6351.jpg';
import test3 from './TestingPhotos/IMG_6352.jpg';

const photos = [
	{
		photo: test1,
		description: "Test different lighting and angles"
	},
	{
		photo: test2,
		description: "Test different lighting and angles"
	},
	{
		photo: test3,
		description: "Test different lighting and angles"
	}
]

const Testing = () => (
	<div>
		<h2>Testing</h2>
		<p>It is important to do a makeup trial before your wedding so you can test it.</p>
		<p>Some things to test:</p>
		<ul>
			<li>How well does it wear over the next 6 hours? -smudging under eyes, creasing on eyelid, shiny forhead.  Smudging under eyes: try a new waterproof mascara.  Creasing on lids: try a new eyeshadow primer.  Shiny forhead: pack blotting paper</li>
			<li>How does it look in different lighting (flash)?  Flash can really wash you out. For flash photography it is best to wear 15% heavier makeup than you think you need in person.  Adding more bronzer, blush, and brow products can help keep you looking balanced in photos.</li>
			<li>How well does it match your neck? (you can see in my pictures that my face looks pink, but my neck looks yellow.  I could use a new foundation color.)</li>
		</ul>
		<StopMotion photos={photos} />
	</div>
);

export default Testing;
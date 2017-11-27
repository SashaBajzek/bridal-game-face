import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import GoldVideo1 from './GoldVideoPhotos/IMG_6037.jpg';
import GoldVideo2 from './GoldVideoPhotos/IMG_6038.jpg';
import GoldVideo3 from './GoldVideoPhotos/IMG_6039.jpg';
import GoldVideo4 from './GoldVideoPhotos/IMG_6041.jpg';
import GoldVideo5 from './GoldVideoPhotos/IMG_6042.jpg';
import GoldVideo6 from './GoldVideoPhotos/IMG_6043.jpg';
import GoldVideo7 from './GoldVideoPhotos/IMG_6047.jpg';
import GoldVideo8 from './GoldVideoPhotos/IMG_6048.jpg';
import GoldVideo9 from './GoldVideoPhotos/IMG_6049.jpg';
import GoldVideo10 from './GoldVideoPhotos/IMG_6050.jpg';
import GoldVideo11 from './GoldVideoPhotos/IMG_6056.jpg';
import GoldVideo12 from './GoldVideoPhotos/IMG_6057.jpg';
import GoldVideo13 from './GoldVideoPhotos/IMG_6058.jpg';
import GoldVideo14 from './GoldVideoPhotos/IMG_6060.jpg';
import GoldVideo15 from './GoldVideoPhotos/IMG_6061.jpg';
import GoldVideo16 from './GoldVideoPhotos/IMG_6066.jpg';
import GoldVideo17 from './GoldVideoPhotos/IMG_6067.jpg';
import GoldVideo18 from './GoldVideoPhotos/IMG_6068.jpg';
import GoldVideo19 from './GoldVideoPhotos/IMG_6070.jpg';
import GoldVideo20 from './GoldVideoPhotos/IMG_6071.jpg';

const GoldVideoList = [
	{
		photo: GoldVideo1,
		description: "Use a paddle shaped brush with gold color"
	},
	{
		photo: GoldVideo2,
		description: "Use a paddle shaped brush with gold color"
	},
	{
		photo: GoldVideo3,
		description: "Drag the gold color across outer half of mobile eyelid"
	},
	{
		photo: GoldVideo4,
		description: "Drag the gold color across outer half of mobile eyelid"
	},
	{
		photo: GoldVideo5,
		description: "Drag the gold color across outer half of mobile eyelid"
	},
	{
		photo: GoldVideo6,
		description: "Drag the gold color across outer half of mobile eyelid"
	},
	{
		photo: GoldVideo7,
		description: "Drag the gold color across outer half of mobile eyelid"
	},
	{
		photo: GoldVideo8,
		description: "Drag the gold color across outer half of mobile eyelid"
	},
	{
		photo: GoldVideo9,
		description: "Drag the gold color across outer half of mobile eyelid"
	},
	{
		photo: GoldVideo10,
		description: "Drag the gold color across outer half of mobile eyelid"
	},
	{
		photo: GoldVideo11,
		description: "Switch to blending brush. Blend across mobile lid to make smooth gradient from gold to champage"
	},
	{
		photo: GoldVideo12,
		description: "Blend across mobile lid to make smooth gradient from gold to champage"
	},
	{
		photo: GoldVideo13,
		description: "Blend across mobile lid to make smooth gradient from gold to champage"
	},
	{
		photo: GoldVideo14,
		description: "Blend across mobile lid to make smooth gradient from gold to champage"
	},
	{
		photo: GoldVideo15,
		description: "Blend across mobile lid to make smooth gradient from gold to champage"
	},
	{
		photo: GoldVideo16,
		description: "Blend through the crease with windshield wiper motions"
	},
	{
		photo: GoldVideo17,
		description: "Blend through the crease with windshield wiper motions"
	},
	{
		photo: GoldVideo18,
		description: "Blend through the crease with windshield wiper motions"
	},
	{
		photo: GoldVideo19,
		description: "Blend through the crease with windshield wiper motions"
	},
	{
		photo: GoldVideo20,
		description: "Blend through the crease with windshield wiper motions"
	}
]

const GoldVideo = () => (
	<div className="Gold Video">
		<StopMotion photos={ GoldVideoList } title="Gold Shade on Lid" />
	</div>
);

export default GoldVideo;
import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import CarbonVideo1 from './CarbonVideoPhotos/IMG_6191.jpg';
import CarbonVideo2 from './CarbonVideoPhotos/IMG_6193.jpg';
import CarbonVideo3 from './CarbonVideoPhotos/IMG_6194.jpg';
import CarbonVideo4 from './CarbonVideoPhotos/IMG_6195.jpg';
import CarbonVideo5 from './CarbonVideoPhotos/IMG_6196.jpg';
import CarbonVideo6 from './CarbonVideoPhotos/IMG_6197.jpg';

const CarbonVideoList = [
	{
		photo: CarbonVideo1,
		description: "Dip angled brush into dark black eyeshadow"
	},
	{
		photo: CarbonVideo2,
		description: "Go over gel eyeliner with black eyeshadow to deepen color and smooth out edges"
	},
	{
		photo: CarbonVideo3,
		description: "Go over gel eyeliner with black eyeshadow to deepen color and smooth out edges"
	},
	{
		photo: CarbonVideo4,
		description: "Go over gel eyeliner with black eyeshadow to deepen color and smooth out edges"
	},
	{
		photo: CarbonVideo5,
		description: "Go over gel eyeliner with black eyeshadow to deepen color and smooth out edges"
	},
	{
		photo: CarbonVideo6,
		description: "Go over gel eyeliner with black eyeshadow to deepen color and smooth out edges"
	}
]

const CarbonVideo = () => (
	<div className="Carbon Video">
		<StopMotion photos={ CarbonVideoList } title="Apply Black Eyeshadow Over Eyeliner" />
	</div>
);

export default CarbonVideo;
import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import LipstickVideo1 from './LipstickVideoPhotos/IMG_6272.jpg';
import LipstickVideo2 from './LipstickVideoPhotos/IMG_6273.jpg';
import LipstickVideo3 from './LipstickVideoPhotos/IMG_6274.jpg';
import LipstickVideo4 from './LipstickVideoPhotos/IMG_6275.jpg';
import LipstickVideo5 from './LipstickVideoPhotos/IMG_6276.jpg';
import LipstickVideo6 from './LipstickVideoPhotos/IMG_6290.jpg';
import LipstickVideo7 from './LipstickVideoPhotos/IMG_6292.jpg';
import LipstickVideo8 from './LipstickVideoPhotos/IMG_6295.jpg';
import LipstickVideo9 from './LipstickVideoPhotos/IMG_6296.jpg';
import LipstickVideo10 from './LipstickVideoPhotos/IMG_6297.jpg';
import LipstickVideo11 from './LipstickVideoPhotos/IMG_6299.jpg';
import LipstickVideo12 from './LipstickVideoPhotos/IMG_6301.jpg';
import LipstickVideo13 from './LipstickVideoPhotos/IMG_6303.jpg';
import LipstickVideo14 from './LipstickVideoPhotos/IMG_6305.jpg';
import LipstickVideo15 from './LipstickVideoPhotos/IMG_6306.jpg';

const LipstickVideoList = [
	{
		photo: LipstickVideo1,
		description: "Apply lipstick like you would apply chapstick"
	},
	{
		photo: LipstickVideo2,
		description: "Apply lipstick like you would apply chapstick"
	},
	{
		photo: LipstickVideo3,
		description: "Apply lipstick like you would apply chapstick"
	},
	{
		photo: LipstickVideo4,
		description: "Apply lipstick like you would apply chapstick"
	},
	{
		photo: LipstickVideo5,
		description: "Apply lipstick like you would apply chapstick"
	},
	{
		photo: LipstickVideo6,
		description: "Blot using a tissue or papertowel"
	},
	{
		photo: LipstickVideo7,
		description: "Blot using a tissue or papertowel"
	},
	{
		photo: LipstickVideo8,
		description: "Apply lipstick a second time"
	},
	{
		photo: LipstickVideo9,
		description: "Clean up mistakes with a qtip"
	},
	{
		photo: LipstickVideo10,
		description: "Apply concealer over mistakes"
	},
	{
		photo: LipstickVideo11,
		description: "Pat in concealer"
	},
	{
		photo: LipstickVideo12,
		description: "To avoid lipstick getting on teeth, put finger in mouth and pull it out removing access lipstick"
	},
	{
		photo: LipstickVideo13,
		description: "To avoid lipstick getting on teeth, put finger in mouth and pull it out removing access lipstick"
	},
	{
		photo: LipstickVideo14,
		description: "To avoid lipstick getting on teeth, put finger in mouth and pull it out removing access lipstick"
	},
	{
		photo: LipstickVideo15,
		description: "Lipstick free teeth"
	}
]

const LipstickVideo = () => (
	<div className="Lipstick Video">
		<StopMotion photos={ LipstickVideoList } title="Lipstick Step-By-Step" />
	</div>
);

export default LipstickVideo;
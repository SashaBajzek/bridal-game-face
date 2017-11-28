import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import OrbVideo1 from './OrbVideoPhotos/IMG_5975.jpg';
import OrbVideo2 from './OrbVideoPhotos/IMG_5977.jpg';
import OrbVideo3 from './OrbVideoPhotos/IMG_5978.jpg';
import OrbVideo4 from './OrbVideoPhotos/IMG_5979.jpg';


const OrbVideoList = [
	{
		photo: OrbVideo1,
		description: "Find an shade that matches your skin tone"
	},
	{
		photo: OrbVideo2,
		description: "Apply right under brows"
	},
	{
		photo: OrbVideo3,
		description: "Apply right under brows"
	},
	{
		photo: OrbVideo4,
		description: "Apply right under brows"
	}
]

const OrbVideo = () => (
	<div className="Orb Video">
		<StopMotion photos={ OrbVideoList } title="Skintone Shade" />
	</div>
);

export default OrbVideo;
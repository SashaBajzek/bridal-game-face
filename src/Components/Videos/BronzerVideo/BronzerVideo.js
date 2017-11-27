import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import BronzerVideo1 from './BronzerVideoPhotos/IMG_5874.jpg';
import BronzerVideo2 from './BronzerVideoPhotos/IMG_5875.jpg';
import BronzerVideo3 from './BronzerVideoPhotos/IMG_5876.jpg';
import BronzerVideo4 from './BronzerVideoPhotos/IMG_5877.jpg';
import BronzerVideo5 from './BronzerVideoPhotos/IMG_5881.jpg';
import BronzerVideo6 from './BronzerVideoPhotos/IMG_5882.jpg';


const BronzerVideoList = [
	{
		photo: BronzerVideo1,
		description: "Bronze along hairline"
	},
	{
		photo: BronzerVideo2,
		description: "Bronze temples"
	},
	{
		photo: BronzerVideo3,
		description: "Bronze under cheekbones"
	},
	{
		photo: BronzerVideo4,
		description: "Bronze jawline"
	},
	{
		photo: BronzerVideo5,
		description: "Start back by hairline"
	},
	{
		photo: BronzerVideo6,
		description: "Stop underneath your eye"
	}
]

const BronzerVideo = () => (
	<div className="Bronzer Video">
		<StopMotion photos={ BronzerVideoList } title="Where to Apply Bronzer" />
	</div>
);

export default BronzerVideo;
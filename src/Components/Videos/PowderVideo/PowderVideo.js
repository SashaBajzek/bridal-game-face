import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import PowderVideo1 from './PowderVideoPhotos/IMG_5859.jpg';
import PowderVideo2 from './PowderVideoPhotos/IMG_5860.jpg';
import PowderVideo3 from './PowderVideoPhotos/IMG_5861.jpg';
import PowderVideo4 from './PowderVideoPhotos/IMG_5862.jpg';


const PowderVideoList = [
	{
		photo: PowderVideo1,
		description: "Powder T-Zone"
	},
	{
		photo: PowderVideo2,
		description: "Powder T-Zone"
	},
	{
		photo: PowderVideo3,
		description: "Powder under eyes to set concealer"
	},
	{
		photo: PowderVideo4,
		description: "Powder under eyes to set concealer"
	}
]

const PowderVideo = () => (
	<div className="Powder Video">
		<StopMotion photos={ PowderVideoList } title="Where to Apply Powder" />
	</div>
);

export default PowderVideo;
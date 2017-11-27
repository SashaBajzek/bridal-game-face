import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import PeachVideoi from './PeachVideoPhotos/IMG_5910.jpg';
import PeachVideoii from './PeachVideoPhotos/IMG_5911.jpg';
import PeachVideoiii from './PeachVideoPhotos/IMG_5912.jpg';
import PeachVideo1 from './PeachVideoPhotos/IMG_5913.jpg';
import PeachVideo2 from './PeachVideoPhotos/IMG_5914.jpg';
import PeachVideo3 from './PeachVideoPhotos/IMG_5915.jpg';
import PeachVideo4 from './PeachVideoPhotos/IMG_5916.jpg';
import PeachVideo5 from './PeachVideoPhotos/IMG_5917.jpg';
import PeachVideo6 from './PeachVideoPhotos/IMG_5918.jpg';
import PeachVideo7 from './PeachVideoPhotos/IMG_5919.jpg';
import PeachVideo8 from './PeachVideoPhotos/IMG_5920.jpg';


const PeachVideoList = [
	{
		photo: PeachVideoi,
		description: "First apply eyeshadow primer"
	},
	{
		photo: PeachVideoii,
		description: "First apply eyeshadow primer"
	},
	{
		photo: PeachVideoiii,
		description: "Pat in the primer and give it a minute to set"
	},
	{
		photo: PeachVideo1,
		description: "Choose a shade that is a touch darker than your skintone"
	},
	{
		photo: PeachVideo2,
		description: "Windshield wiper motions back and forth in crease"
	},
	{
		photo: PeachVideo3,
		description: "Windshield wiper motions back and forth in crease"
	},
	{
		photo: PeachVideo4,
		description: "Windshield wiper motions back and forth in crease"
	},
	{
		photo: PeachVideo5,
		description: "Windshield wiper motions back and forth in crease"
	},
	{
		photo: PeachVideo6,
		description: "Windshield wiper motions back and forth in crease"
	},
	{
		photo: PeachVideo7,
		description: "Windshield wiper motions back and forth in crease"
	},
	{
		photo: PeachVideo8,
		description: "Windshield wiper motions back and forth in crease"
	}
]

const PeachVideo = () => (
	<div className="Peach Video">
		<StopMotion photos={ PeachVideoList } title="Peach Transition Shade" />
	</div>
);

export default PeachVideo;
import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import PinkVideo1 from './PinkVideoPhotos/IMG_5962.jpg';
import PinkVideo2 from './PinkVideoPhotos/IMG_5963.jpg';
import PinkVideo3 from './PinkVideoPhotos/IMG_5965.jpg';
import PinkVideo4 from './PinkVideoPhotos/IMG_5966.jpg';
import PinkVideo5 from './PinkVideoPhotos/IMG_5967.jpg';
import PinkVideo6 from './PinkVideoPhotos/IMG_5968.jpg';
import PinkVideo7 from './PinkVideoPhotos/IMG_5969.jpg';
import PinkVideo8 from './PinkVideoPhotos/IMG_5970.jpg';
import PinkVideo9 from './PinkVideoPhotos/IMG_5971.jpg';


const PinkVideoList = [
	{
		photo: PinkVideo1,
		description: "Using smaller brush, tip straight down into pink eyeshadow"
	},
	{
		photo: PinkVideo2,
		description: "Color should be just at the brush tip"
	},
	{
		photo: PinkVideo3,
		description: "Windshield wiper motions back and forth just above the crease"
	},
	{
		photo: PinkVideo4,
		description: "Windshield wiper motions back and forth just above the crease"
	},
	{
		photo: PinkVideo5,
		description: "Windshield wiper motions back and forth just above the crease"
	},
	{
		photo: PinkVideo6,
		description: "Windshield wiper motions back and forth just above the crease"
	},
	{
		photo: PinkVideo7,
		description: "Windshield wiper motions back and forth just above the crease"
	},
	{
		photo: PinkVideo8,
		description: "Windshield wiper motions back and forth just above the crease"
	},
	{
		photo: PinkVideo9,
		description: "Windshield wiper motions back and forth just above the crease"
	}
]

const PinkVideo = () => (
	<div className="Pink Video">
		<StopMotion photos={ PinkVideoList } title="Pink Shade" />
	</div>
);

export default PinkVideo;
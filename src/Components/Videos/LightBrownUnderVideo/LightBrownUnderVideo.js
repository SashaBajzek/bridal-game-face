import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import LightBrownUnderVideo1 from './LightBrownUnderVideoPhotos/IMG_6104.jpg';
import LightBrownUnderVideo2 from './LightBrownUnderVideoPhotos/IMG_6108.jpg';
import LightBrownUnderVideo3 from './LightBrownUnderVideoPhotos/IMG_6109.jpg';
import LightBrownUnderVideo4 from './LightBrownUnderVideoPhotos/IMG_6110.jpg';

const LightBrownUnderVideoList = [
	{
		photo: LightBrownUnderVideo1,
		description: "Dip pencil brush into eyeshadow"
	},
	{
		photo: LightBrownUnderVideo2,
		description: "Windshield wiper motions back and forth on bottom lid"
	},
	{
		photo: LightBrownUnderVideo3,
		description: "Windshield wiper motions back and forth on bottom lid"
	},
	{
		photo: LightBrownUnderVideo4,
		description: "Windshield wiper motions back and forth on bottom lid"
	}
]

const LightBrownUnderVideo = () => (
	<div className="LightBrownUnder Video">
		<StopMotion photos={ LightBrownUnderVideoList } title="Light Brown Shade Under Eyes" />
	</div>
);

export default LightBrownUnderVideo;
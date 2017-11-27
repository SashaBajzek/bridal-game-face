import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import LightBrownVideo1 from './LightBrownVideoPhotos/IMG_5949.jpg';
import LightBrownVideo2 from './LightBrownVideoPhotos/IMG_5951.jpg';
import LightBrownVideo3 from './LightBrownVideoPhotos/IMG_5952.jpg';
import LightBrownVideo4 from './LightBrownVideoPhotos/IMG_5953.jpg';
import LightBrownVideo5 from './LightBrownVideoPhotos/IMG_5954.jpg';
import LightBrownVideo6 from './LightBrownVideoPhotos/IMG_5955.jpg';
import LightBrownVideo7 from './LightBrownVideoPhotos/IMG_5956.jpg';
import LightBrownVideo8 from './LightBrownVideoPhotos/IMG_5958.jpg';
import LightBrownVideo9 from './LightBrownVideoPhotos/IMG_5959.jpg';


const LightBrownVideoList = [
	{
		photo: LightBrownVideo1,
		description: "Dip brush straight down into eyeshadow"
	},
	{
		photo: LightBrownVideo2,
		description: "The color will be concentrated at the brush tip"
	},
	{
		photo: LightBrownVideo3,
		description: "Windshield wiper motions back and forth in crease"
	},
	{
		photo: LightBrownVideo4,
		description: "Windshield wiper motions back and forth in crease"
	},
	{
		photo: LightBrownVideo5,
		description: "Windshield wiper motions back and forth in crease"
	},
	{
		photo: LightBrownVideo6,
		description: "Windshield wiper motions back and forth in crease"
	},
	{
		photo: LightBrownVideo7,
		description: "Windshield wiper motions back and forth in crease"
	},
	{
		photo: LightBrownVideo8,
		description: "Windshield wiper motions back and forth in crease"
	},
	{
		photo: LightBrownVideo9,
		description: "Windshield wiper motions back and forth in crease"
	}
]

const LightBrownVideo = () => (
	<div className="LightBrown Video">
		<StopMotion photos={ LightBrownVideoList } title="Light Brown Transition Shade" />
	</div>
);

export default LightBrownVideo;
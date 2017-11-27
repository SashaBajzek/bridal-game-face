import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import DarkBrownUnderVideo1 from './DarkBrownUnderVideoPhotos/IMG_6117.jpg';
import DarkBrownUnderVideo2 from './DarkBrownUnderVideoPhotos/IMG_6120.jpg';
import DarkBrownUnderVideo3 from './DarkBrownUnderVideoPhotos/IMG_6121.jpg';
import DarkBrownUnderVideo4 from './DarkBrownUnderVideoPhotos/IMG_6122.jpg';
import DarkBrownUnderVideo5 from './DarkBrownUnderVideoPhotos/IMG_6123.jpg';

const DarkBrownUnderVideoList = [
	{
		photo: DarkBrownUnderVideo1,
		description: "Dip pencil brush into eyeshadow"
	},
	{
		photo: DarkBrownUnderVideo2,
		description: "Apply to outer half of bottom lid"
	},
	{
		photo: DarkBrownUnderVideo3,
		description: "Apply to outer half of bottom lid"
	},
	{
		photo: DarkBrownUnderVideo4,
		description: "Apply to outer half of bottom lid"
	},
	{
		photo: DarkBrownUnderVideo5,
		description: "Apply to outer half of bottom lid"
	}
]

const DarkBrownUnderVideo = () => (
	<div className="DarkBrownUnder Video">
		<StopMotion photos={ DarkBrownUnderVideoList } title="Dark Brown Shade Under Eyes" />
	</div>
);

export default DarkBrownUnderVideo;
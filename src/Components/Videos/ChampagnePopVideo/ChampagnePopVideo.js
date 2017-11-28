import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import ChampagnePopVideo1 from './ChampagnePopVideoPhotos/IMG_6076.jpg';
import ChampagnePopVideo2 from './ChampagnePopVideoPhotos/IMG_6089.jpg';
import ChampagnePopVideo3 from './ChampagnePopVideoPhotos/IMG_6090.jpg';
import ChampagnePopVideo4 from './ChampagnePopVideoPhotos/IMG_6091.jpg';
import ChampagnePopVideo5 from './ChampagnePopVideoPhotos/IMG_6098.jpg';
import ChampagnePopVideo6 from './ChampagnePopVideoPhotos/IMG_6099.jpg';

const ChampagnePopVideoList = [
	{
		photo: ChampagnePopVideo1,
		description: "Use an angled brush"
	},
	{
		photo: ChampagnePopVideo2,
		description: "Apply to tear duct area and inner corner"
	},
	{
		photo: ChampagnePopVideo3,
		description: "Apply to inner corner"
	},
	{
		photo: ChampagnePopVideo4,
		description: "Apply to inner corner"
	},
	{
		photo: ChampagnePopVideo5,
		description: "Apply to inner third of lower lid"
	},
	{
		photo: ChampagnePopVideo6,
		description: "Apply to inner third of lower lid"
	}
]

const ChampagnePopVideo = () => (
	<div className="ChampagnePop Video">
		<StopMotion photos={ ChampagnePopVideoList } title="Apply Inner Corner Highlight" />
	</div>
);

export default ChampagnePopVideo;
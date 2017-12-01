import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import LipstickNaturalVideo1 from './LipstickNaturalVideoPhotos/Lips-Detail1.jpg';
import LipstickNaturalVideo2 from './LipstickNaturalVideoPhotos/Lips-Detail2.jpg';
import LipstickNaturalVideo3 from './LipstickNaturalVideoPhotos/Lips-Detail3.jpg';
import LipstickNaturalVideo4 from './LipstickNaturalVideoPhotos/Lips-Detail4.jpg';

const LipstickNaturalVideoList = [
	{
		photo: LipstickNaturalVideo1,
		description: "Choose a rosy pink shade"
	},
	{
		photo: LipstickNaturalVideo2,
		description: "Apply lipstick like you would apply chapstick"
	},
	{
		photo: LipstickNaturalVideo3,
		description: "Blot using a tissue or papertowel"
	},
	{
		photo: LipstickNaturalVideo4,
		description: "Blot using a tissue or papertowel"
	}
]

const LipstickNaturalVideo = () => (
	<div className="Lipstick Natural Video">
		<StopMotion photos={ LipstickNaturalVideoList } title="Apply Lipstick" />
	</div>
);

export default LipstickNaturalVideo;
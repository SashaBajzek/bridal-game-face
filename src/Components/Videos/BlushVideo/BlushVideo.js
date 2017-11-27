import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import BlushVideo1 from './BlushVideoPhotos/Blush1.jpg';
import BlushVideo2 from './BlushVideoPhotos/Blush2.jpg';
import BlushVideo3 from './BlushVideoPhotos/Blush3.jpg';

const BlushVideoList = [
	{
		photo: BlushVideo1,
		description: "Choose a peachy pink shade"
	},
	{
		photo: BlushVideo2,
		description: "Apply blush on tops of cheeks"
	},
	{
		photo: BlushVideo3,
		description: "Apply blush on tops of cheeks"
	}
]

const BlushVideo = () => (
	<div className="Blush Video">
		<StopMotion photos={ BlushVideoList } title="Blush" />
	</div>
);

export default BlushVideo;
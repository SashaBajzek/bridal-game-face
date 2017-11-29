import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import CleanUpVideo1 from './CleanUpVideoPhotos/Clean-Oil1.jpg';
import CleanUpVideo2 from './CleanUpVideoPhotos/Clean-Oil2.jpg';
import CleanUpVideo3 from './CleanUpVideoPhotos/Clean-Oil3.jpg';
import CleanUpVideo4 from './CleanUpVideoPhotos/Clean-Done.jpg';

const CleanUpVideoList = [
	{
		photo: CleanUpVideo1,
		description: "Rub oil into dry skin to break down makeup"
	},
	{
		photo: CleanUpVideo2,
		description: "Wipe off with warm, wet towel"
	},
	{
		photo: CleanUpVideo3,
		description: "Having a Mulan moment"
	},
	{
		photo: CleanUpVideo4,
		description: "Makeup gone. Follow up with normal face soap"
	}
]

const CleanUpVideo = () => (
	<div className="CleanUp Video">
		<StopMotion photos={ CleanUpVideoList } title="Removing Makeup With Oil" />
	</div>
);

export default CleanUpVideo;
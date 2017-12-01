import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import TransitionVideo1 from './TransitionVideoPhotos/Primer-Detail1.jpg';
import TransitionVideo2 from './TransitionVideoPhotos/Primer-Detail2.jpg';
import TransitionVideo3 from './TransitionVideoPhotos/Shadow-Transition.jpg';
import TransitionVideo4 from './TransitionVideoPhotos/Shadow-Transition1.jpg';
import TransitionVideo5 from './TransitionVideoPhotos/Shadow-Transition2.jpg';
import TransitionVideo6 from './TransitionVideoPhotos/Shadow-Transition3.jpg';


const TransitionVideoList = [
	{
		photo: TransitionVideo1,
		description: "First apply eyeshadow primer"
	},
	{
		photo: TransitionVideo2,
		description: "Pat in primer and wait a minute to set"
	},
	{
		photo: TransitionVideo3,
		description: "Choose a warm brown shade"
	},
	{
		photo: TransitionVideo4,
		description: "Windshield wiper motions back and forth in crease"
	},
	{
		photo: TransitionVideo5,
		description: "Windshield wiper motions back and forth in crease"
	},
	{
		photo: TransitionVideo6,
		description: "Windshield wiper motions back and forth in crease"
	}
]

const TransitionVideo = () => (
	<div className="Transition Video">
		<StopMotion photos={ TransitionVideoList } title="Brown Transition Shade" />
	</div>
);

export default TransitionVideo;
import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import ChampagneVideo1 from './ChampagneVideoPhotos/IMG_6017.jpg';
import ChampagneVideo2 from './ChampagneVideoPhotos/IMG_6018.jpg';
import ChampagneVideo3 from './ChampagneVideoPhotos/IMG_6020.jpg';
import ChampagneVideo4 from './ChampagneVideoPhotos/IMG_6021.jpg';
import ChampagneVideo5 from './ChampagneVideoPhotos/IMG_6022.jpg';
import ChampagneVideo6 from './ChampagneVideoPhotos/IMG_6024.jpg';
import ChampagneVideo7 from './ChampagneVideoPhotos/IMG_6025.jpg';

const ChampagneVideoList = [
	{
		photo: ChampagneVideo1,
		description: "Use a paddle shaped brush with light champagne pink color"
	},
	{
		photo: ChampagneVideo2,
		description: "Use a paddle shaped brush with light champagne pink color"
	},
	{
		photo: ChampagneVideo3,
		description: "Drag the champagne color across entire mobile eyelid"
	},
	{
		photo: ChampagneVideo4,
		description: "Drag the champagne color across entire mobile eyelid"
	},
	{
		photo: ChampagneVideo5,
		description: "Drag the champagne color across entire mobile eyelid"
	},
	{
		photo: ChampagneVideo6,
		description: "Drag the champagne color across entire mobile eyelid"
	},
	{
		photo: ChampagneVideo7,
		description: "Drag the champagne color across entire mobile eyelid"
	}
]

const ChampagneVideo = () => (
	<div className="Champagne Video">
		<StopMotion photos={ ChampagneVideoList } title="Champagne Shade on Lid" />
	</div>
);

export default ChampagneVideo;
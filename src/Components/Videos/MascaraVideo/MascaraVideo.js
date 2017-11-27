import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import MascaraVideo1 from './MascaraVideoPhotos/IMG_6206.jpg';
import MascaraVideo2 from './MascaraVideoPhotos/IMG_6213.jpg';
import MascaraVideo3 from './MascaraVideoPhotos/IMG_6214.jpg';
import MascaraVideo4 from './MascaraVideoPhotos/IMG_6215.jpg';
import MascaraVideo5 from './MascaraVideoPhotos/IMG_6217.jpg';
import MascaraVideo6 from './MascaraVideoPhotos/IMG_6219.jpg';
import MascaraVideo7 from './MascaraVideoPhotos/IMG_6221.jpg';
import MascaraVideo8 from './MascaraVideoPhotos/IMG_6222.jpg';

const MascaraVideoList = [
	{
		photo: MascaraVideo1,
		description: "Give lashes a good curl"
	},
	{
		photo: MascaraVideo2,
		description: "Apply mascara, wiggling wand from roots to ends"
	},
	{
		photo: MascaraVideo3,
		description: "Apply mascara, wiggling wand from roots to ends"
	},
	{
		photo: MascaraVideo4,
		description: "Comb out any clumps"
	},
	{
		photo: MascaraVideo5,
		description: "Comb out any clumps"
	},
	{
		photo: MascaraVideo6,
		description: "Apply mascara to bottom lashes"
	},
	{
		photo: MascaraVideo7,
		description: "Use a q-tip with makeup remover to fix any smudges"
	},
	{
		photo: MascaraVideo8,
		description: "Use a q-tip with makeup remover to fix any smudges"
	}
]

const MascaraVideo = () => (
	<div className="Mascara Video">
		<StopMotion photos={ MascaraVideoList } title="Apply Mascara" />
	</div>
);

export default MascaraVideo;
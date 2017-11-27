import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import TanVideo1 from './TanVideoPhotos/IMG_5983.jpg';
import TanVideo2 from './TanVideoPhotos/IMG_5984.jpg';
import TanVideo3 from './TanVideoPhotos/IMG_6004.jpg';
import TanVideo4 from './TanVideoPhotos/IMG_6005.jpg';
import TanVideo5 from './TanVideoPhotos/IMG_6006.jpg';
import TanVideo6 from './TanVideoPhotos/IMG_6007.jpg';
import TanVideo7 from './TanVideoPhotos/IMG_6008.jpg';
import TanVideo8 from './TanVideoPhotos/IMG_6009.jpg';
import TanVideo9 from './TanVideoPhotos/IMG_6010.jpg';
import TanVideo10 from './TanVideoPhotos/IMG_6011.jpg';
import TanVideo11 from './TanVideoPhotos/IMG_6012.jpg';

const TanVideoList = [
	{
		photo: TanVideo1,
		description: "Use a paddle shaped brush with a darker brown"
	},
	{
		photo: TanVideo2,
		description: "Use a paddle shaped brush with a darker brown"
	},
	{
		photo: TanVideo3,
		description: "Apply darker brown shade in outer third of eyelid"
	},
	{
		photo: TanVideo4,
		description: "Apply darker brown shade in outer third of eyelid"
	},
	{
		photo: TanVideo5,
		description: "Apply darker brown shade in outer third of eyelid"
	},
	{
		photo: TanVideo6,
		description: "Apply darker brown shade in outer third of eyelid"
	},
	{
		photo: TanVideo7,
		description: "Apply dark brown shade in the depth of the crease"
	},
	{
		photo: TanVideo8,
		description: "Apply dark brown shade in the depth of the crease"
	},
	{
		photo: TanVideo9,
		description: "Apply dark brown shade in the depth of the crease"
	},
	{
		photo: TanVideo10,
		description: "Apply dark brown shade in the depth of the crease"
	},
	{
		photo: TanVideo11,
		description: "Apply dark brown shade in the depth of the crease"
	}
]

const TanVideo = () => (
	<div className="Tan Video">
		<StopMotion photos={ TanVideoList } title="Darker Brown Shade" />
	</div>
);

export default TanVideo;
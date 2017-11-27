import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import BrowVideo1 from './BrowVideoPhotos/IMG_5865.jpg';
import BrowVideo2 from './BrowVideoPhotos/IMG_5866.jpg';
import BrowVideo3 from './BrowVideoPhotos/IMG_5867.jpg';
import BrowVideo4 from './BrowVideoPhotos/IMG_5868.jpg';
import BrowVideo5 from './BrowVideoPhotos/IMG_5869.jpg';
import BrowVideo6 from './BrowVideoPhotos/IMG_5870.jpg';
import BrowVideo7 from './BrowVideoPhotos/IMG_5872.jpg';


const BrowVideoList = [
	{
		photo: BrowVideo1,
		description: "Comb brows up and out"
	},
	{
		photo: BrowVideo2,
		description: "Starting point should be straight up from side of nostril"
	},
	{
		photo: BrowVideo3,
		description: "Top of arch should be straight line from nostril through center of eye"
	},
	{
		photo: BrowVideo4,
		description: "End of brow should be straight line from nostril to edge of eye"
	},
	{
		photo: BrowVideo5,
		description: "Filled in brows look a bit dark"
	},
	{
		photo: BrowVideo6,
		description: "Brush them through again to lighten and blend"
	},
	{
		photo: BrowVideo7,
		description: "Finished brows"
	}
]

const BrowVideo = () => (
	<div className="Brow Video">
		<StopMotion photos={ BrowVideoList } title="How to Fill in Brows" />
	</div>
);

export default BrowVideo;
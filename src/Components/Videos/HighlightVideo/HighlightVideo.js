import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import HighlightVideo1 from './HighlightVideoPhotos/IMG_5901.jpg';
import HighlightVideo2 from './HighlightVideoPhotos/IMG_5902.jpg';
import HighlightVideo3 from './HighlightVideoPhotos/IMG_5903.jpg';
import HighlightVideo4 from './HighlightVideoPhotos/IMG_5904.jpg';


const HighlightVideoList = [
	{
		photo: HighlightVideo1,
		description: "Find a highlight shade"
	},
	{
		photo: HighlightVideo2,
		description: "Apply to tops of cheekbones"
	},
	{
		photo: HighlightVideo3,
		description: "Apply in C shape around outside of eye"
	},
	{
		photo: HighlightVideo4,
		description: "Apply to cupid's bow"
	}
]

const HighlightVideo = () => (
	<div className="Highlight Video">
		<StopMotion photos={ HighlightVideoList } title="Where to Apply Highlight" />
	</div>
);

export default HighlightVideo;
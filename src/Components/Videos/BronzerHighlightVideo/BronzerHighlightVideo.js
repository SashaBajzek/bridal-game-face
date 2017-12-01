import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import BronzerHighlightVideo1 from './BronzerHighlightVideoPhotos/Bronzer-Detail1.jpg';
import BronzerHighlightVideo2 from './BronzerHighlightVideoPhotos/Bronzer-Detail2.jpg';
import BronzerHighlightVideo3 from './BronzerHighlightVideoPhotos/Bronzer-Detail3.jpg';
import BronzerHighlightVideo4 from './BronzerHighlightVideoPhotos/Bronzer-Detail4.jpg';
import BronzerHighlightVideo5 from './BronzerHighlightVideoPhotos/Bronzer-Detail5.jpg';
import BronzerHighlightVideo6 from './BronzerHighlightVideoPhotos/Bronzer-Detail6.jpg';
import BronzerHighlightVideo7 from './BronzerHighlightVideoPhotos/Highlight-Detail.jpg';
import BronzerHighlightVideo8 from './BronzerHighlightVideoPhotos/Highlight-Detail2.jpg';
import BronzerHighlightVideo9 from './BronzerHighlightVideoPhotos/Highlight-Detail3.jpg';


const BronzerHighlightVideoList = [
	{
		photo: BronzerHighlightVideo1,
		description: "Choose a bronzer shade"
	},
	{
		photo: BronzerHighlightVideo2,
		description: "Bronze under cheekbones"
	},
	{
		photo: BronzerHighlightVideo3,
		description: "Bronze under cheekbones"
	},
	{
		photo: BronzerHighlightVideo4,
		description: "Bronze temples"
	},
	{
		photo: BronzerHighlightVideo5,
		description: "Bronze temples"
	},
	{
		photo: BronzerHighlightVideo6,
		description: "Bronze jawline"
	},
	{
		photo: BronzerHighlightVideo7,
		description: "Choose a highlight shade"
	},
	{
		photo: BronzerHighlightVideo8,
		description: "Highlight tops of cheekbones"
	},
	{
		photo: BronzerHighlightVideo9,
		description: "Highlight tops of cheekbones"
	}
]

const BronzerHighlightVideo = () => (
	<div className="BronzerHighlight Video">
		<StopMotion photos={ BronzerHighlightVideoList } title="Where to Apply Bronzer & Highlighter" />
	</div>
);

export default BronzerHighlightVideo;
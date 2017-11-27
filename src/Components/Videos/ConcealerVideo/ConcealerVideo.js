import React from 'react';
import StopMotion from '../../StopMotion/StopMotion';

import ConcealerVideo1 from './ConcealerVideoPhotos/Concealer1.jpg';
import ConcealerVideo2 from './ConcealerVideoPhotos/Concealer2.jpg';
import ConcealerVideo3 from './ConcealerVideoPhotos/Concealer3.jpg';

const ConcealerVideoList = [
	{
		photo: ConcealerVideo1,
		description: "Apply concealer under eyes"
	},
	{
		photo: ConcealerVideo2,
		description: "Apply concealer to blemishes and red spots"
	},
	{
		photo: ConcealerVideo3,
		description: "Pat in with finger"
	}
]

const ConcealerVideo = () => (
	<div className="Concealer Video">
		<StopMotion photos={ ConcealerVideoList } title="Concealer" />
	</div>
);

export default ConcealerVideo;
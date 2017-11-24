import React from 'react';
import StopMotion from '../StopMotion/StopMotion';
import test1 from './TestingPhotos/IMG_6349.jpg';
import test2 from './TestingPhotos/IMG_6351.jpg';
import test3 from './TestingPhotos/IMG_6352.jpg';
import test4 from './TestingPhotos/IMG_6314.jpg';
import test5 from './TestingPhotos/IMG_6315.jpg';
import test6 from './TestingPhotos/IMG_6336.jpg';
import test7 from './TestingPhotos/IMG_6338.jpg';
import test8 from './TestingPhotos/Test5.jpg';
import './Testing.css';

const photos = [
	{
		photo: test1,
		description: "Testing different angles with no flash"
	},
	{
		photo: test2,
		description: "Testing different angles with no flash"
	},
	{
		photo: test3,
		description: "Testing different angles with no flash"
	},
	{
		photo: test4,
		description: "Testing different angles with flash"
	},
	{
		photo: test5,
		description: "Testing different angles with flash"
	},
	{
		photo: test6,
		description: "Testing different angles with flash"
	},
	{
		photo: test7,
		description: "Testing different angles with flash"
	},
	{
		photo: test8,
		description: "Testing natural look in daylight"
	}
]

const Testing = () => (
	<div>
		<h2>Testing</h2>
		<p>It is important to do a makeup trial before your wedding so you can test it. Wear the look for the day, checking up on how well it wears and if it irritates your skin in any way.  You don't want any surprises on your actual wedding day.</p>
		<h3>Some things to test:</h3>
		<ul className="Testing__list">
			<li><strong>How well does it wear over the next 8 hours?</strong>
				<ul className="Testing__sublist">
					<li>
						<div>Black smudging or flakes under eyes?</div>
						<div className="Testing__arrow">&#8594;</div>
						<div>Try a new waterproof or tubing mascara, or eyeliner</div>
					</li>
					<li>
						<div>Creasing on lids?</div>
						<div className="Testing__arrow">&#8594;</div>
						<div>Try a new eyeshadow primer</div>
					</li>
					<li>
						<div>Shiny forhead?</div>
						<div className="Testing__arrow">&#8594;</div>
						<div>Try a mattifying powder and pack blotting paper to touch up throughout the day</div>
					</li>
					<li>
						<div>Dry, crepey looking skin?</div>
						<div className="Testing__arrow">&#8594;</div>
						<div>Try a dewy, moisturizing foundation and use setting powder sparingly, only to set your concealer and where you get oily. Also, try a dewy setting spray (like <a href="https://www.maccosmetics.com/product/13825/32212/products/skincare/primers/prep-prime-fix">MAC Fix+</a>)</div>
					</li>
					<li>
						<div>Makeup shifting on your skin?</div>
						<div className="Testing__arrow">&#8594;</div>
						<div>Try a foundation primer or a setting spray. Primers (like <a href="https://www.sephora.com/product/veil-mineral-primer-P210575?skuId=1319193&icid2=products%20grid:p210575">Hourglass</a>) create a barrier between your skin oils and your makeup, preventing your skin from breaking down your makeup.  Setting sprays (like <a href="http://skindinavia.com/products/the-makeup-finishing-spray-bridal.html">Skindinavia Bridal</a>) help to lock everything in afterwards.
						</div>
					</li>
				</ul>
			</li>
			<li><strong>How does it look in different lighting (especially flash)?</strong>
				<ul className="Testing__sublist">
					<li>
						<div>Is flash washing you out?</div>
						<div className="Testing__arrow">&#8594;</div>
						<div>For flash photography it is best to wear 15% heavier makeup than you think you need in person.  Adding more bronzer, blush, and brow products can help keep you looking balanced in photos.</div>
					</li>
					<li>
						<div>Do you have any strange white casts on your face in flash photos?</div>
						<div className="Testing__arrow">&#8594;</div>
						<div>Flash back can be caused by setting powders high in silica or by products that have a high SPF. Try using a lighter layer of setting powder, or a different one with less silica.  Also, skip your high SPF sunscreen on your wedding day, keeping it under 20 SPF.</div>
					</li>
				</ul>
			</li>
			<li><strong>How well does your foundation match your neck?</strong> If you buy your foundation for your wedding and then get a tan closer to your day, you will need to adjust your foundation color to match your new skintone. Always check that your foundation matches your neck and blend some foundation down your neck to make sure it is seamless.</li>
		</ul>
		<StopMotion photos={photos} />
	</div>
);

export default Testing;
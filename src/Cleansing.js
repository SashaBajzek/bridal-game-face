import React, { Component } from 'react';
import Slider from 'react-slick';
import './Cleansing.css'

class Cleansing extends Component {
  render() {
		const settings = {
			centerMode: true,
			centerPadding: '180px',
			dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
			responsive: [{
				breakpoint: 768,
				settings: {
					centerPadding: '160px'
				}
			},
			{
				breakpoint: 738,
				settings: {
				centerPadding: '120px'
				}
			},
			{
				breakpoint: 650,
				settings: {
				centerPadding: '110px'
				}
			},
			{
				breakpoint: 560,
				settings: {
				centerPadding: '60px'
				}
			},
			{
				breakpoint: 516,
				settings: {
				centerPadding: '50px'
				}
			}]
		};
    return (
			<div className="CleansingSlider">
				
				<Slider {...settings}>
					<div className="CleansingSlider__slide">
						<img src={require("./photos/CleanUp/Clean-Oil1.jpg")} alt="Oil dissolving makeup"/>
					</div>
          <div className="CleansingSlider__slide">
						<img src={require("./photos/CleanUp/Clean-Oil2.jpg")} alt="Wiping off oil"/>
					</div>
					<div className="CleansingSlider__slide">
						<img src={require("./photos/CleanUp/Clean-Oil3.jpg")} alt="Mulan face"/>
					</div>
					<div className="CleansingSlider__slide">
						<img src={require("./photos/CleanUp/Clean-Done.jpg")} alt="Finished cleansing"/>
					</div>
				</Slider>
			</div>
    );
  }
}

export default Cleansing;

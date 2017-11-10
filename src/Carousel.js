import React, { Component } from 'react';
import 'waypoints/lib/noframework.waypoints.js';
import smoothScroll from 'smoothscroll';
import './Carousel.css';
import arrowLeft from './photos/Icons/Left-Arrow.svg';
import arrowRight from './photos/Icons/Right-Arrow.svg';

const items = [
	{
		id: 'cleanse-1',
		name: 'First cleansing step',
		description: 'Rub oil into dry skin to break down makeup',
		image: './photos/CleanUp/Clean-Oil1.jpg'
	},
	{
		id: 'cleanse-2',
		name: 'Second cleansing step',
		description: 'Wipe off with warm, wet towel',
		image: './photos/CleanUp/Clean-Oil2.jpg'
	},
	{
		id: 'cleanse-3',
		name: 'Third cleansing step',
		description: 'Having a Mulan moment',
		image: './photos/CleanUp/Clean-Oil3.jpg'
	},
	{
		id: 'cleanse-4',
		name: 'Last cleansing step',
		description: 'Makeup gone. Follow up with normal face soap',
		image: './photos/CleanUp/Clean-Done.jpg'
	}
];

class Carousel extends Component {
	state = {
		currentItem: 0
	};

	setItem = (i) => {
		this.setState({
			currentItem: i
		});
	}
	
	goToItem = itemId => (event) => {
		event.preventDefault();
		//window.smoothScroll(target, duration, callback, context, vertical or horizontal)
		//target: what you want to scroll to
		//context: scrolling context (optional, defaults to window, can be any HTMLElement Object)
		//https://github.com/JeffreyATW/smoothScroll
		smoothScroll(document.querySelector(`.Carousel__target--${itemId}`), undefined, undefined, document.querySelector('.Carousel__list'), 'horizontal');
	}
	
	componentDidMount() {
		//Waypoints is the easiest way to trigger a function when you scroll to an element.
		//The element tells Waypoints which DOM element's position to observe during scroll, and handler is the function that will trigger when the top of that element hits the top of the viewport.
		//http://imakewebthings.com/waypoints/guides/getting-started/
		
		const context = document.querySelector(`.Carousel__list`);
		
		items.forEach((item, i) => {
			const element = document.querySelector(`.Carousel__item--${item.id}`);
	
			
			new window.Waypoint({
				context,
				element,
				handler: (direction) => {
					if (direction === 'right') {
						this.setItem(i);
					}
				},
				horizontal: true,
				offset: 'right-in-view'
			});
			
			new window.Waypoint({
        context,
        element,
        handler: (direction) => {
          if (direction === 'left') {
            this.setItem(i);
          }
        },
        horizontal: true
      });
    });
	}

	render() {
		const { currentItem } = this.state;
		
		return (
			<div className="Carousel">
				<ul className="Carousel__list">
					{items.map(item => (
						<li className={`Carousel__item Carousel__item--${item.id}`} id={item.id} key={item.id}>
							<div className={`Carousel__target Carousel__target--${item.id}`} />
							<figure>
								<img src={require(`${item.image}`)} alt={item.name} />
								<figcaption>{item.description}</figcaption>
							</figure>
						</li>
					))}
				</ul>
				{items[currentItem - 1] && 
					<a href={`#${items[currentItem - 1].id}`} onClick={this.goToItem(items[currentItem - 1].id)}>
						<img className="Carousel__arrow--prev" src={arrowLeft} alt="Previous cleansing step arrow"/>
					</a>
				}
				{items[currentItem + 1] && 
					<a href={`#${items[currentItem + 1].id}`} onClick={this.goToItem(items[currentItem + 1].id)}>
						<img className="Carousel__arrow--next" src={arrowRight} alt="Next cleansing step arrow"/>
					</a>
				}
			</div>
		);
	}
};

export default Carousel;


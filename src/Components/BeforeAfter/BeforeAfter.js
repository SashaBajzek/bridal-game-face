import React, { Component } from 'react';
import './BeforeAfter.css';

class BeforeAfter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 50
		}
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	
	render(){
		const imageWidth = this.state.value + "%";
		const {
			product,
			beforeImg,
			afterImg,
			description
		} = this.props;
		return <figure className="image-compare">
			<label>
				<h4 className="image-compare__title">{product}</h4>
				<div className="image-compare__images">
					<img src={afterImg} alt={`Face after ${product}`} />
					<div className="image-compare__image--before" style={{width: imageWidth}}>
						<img src={beforeImg} alt={`Face after ${product}`} />		
					</div>
					<input type="range" min="0" max="100" value={this.state.value} name="image-slider" className="image-compare__image-slider" onChange={this.handleChange} />
				</div>
			</label>
			<figcaption className="image-compare__caption">{description}</figcaption>
		</figure>
	}
	
}

export default BeforeAfter;
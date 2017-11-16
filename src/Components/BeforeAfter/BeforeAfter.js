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
		return <figure className="BeforeAfter">
			<label>
				<h4 className="BeforeAfter__title">{product}</h4>
				<div className="BeforeAfter__images">
					<img src={afterImg} alt={`Face after ${product}`} />
					<div className="BeforeAfter__image--before" style={{width: imageWidth}}>
						<img src={beforeImg} alt={`Face after ${product}`} />		
					</div>
					<input type="range" min="0" max="100" value={this.state.value} name="image-slider" className="BeforeAfter__image-slider" onChange={this.handleChange} />
				</div>
			</label>
			<figcaption className="BeforeAfter__caption">{description}</figcaption>
		</figure>
	}
	
}

export default BeforeAfter;
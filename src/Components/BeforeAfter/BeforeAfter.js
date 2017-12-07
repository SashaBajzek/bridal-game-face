// @flow

import React, { Component } from 'react';
import './BeforeAfter.css';

type Props = {
	product: string,
	beforeImg: string,
	afterImg: string,
	props: {product: string,
				 beforeImg: string,
				 afterImg: string,
				 description: string}
};

type State = {
	value: number
};

class BeforeAfter extends Component<Props, State> {
	state = { value: 50 };
	
	handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
		// to access input instance use event.currentTarget
		//(event.currentTarget: HTMLInputElement);
		this.setState({value: parseInt(event.currentTarget.value, 10)});
	};
	
	render(){
		const imageWidth = this.state.value + "%";
		const {
			product,
			beforeImg,
			afterImg,
		} = this.props;
		return <div className="BeforeAfter BeforeAfter__images">
			<img src={afterImg} alt={`Face after ${product}`} />
			<div className="BeforeAfter__image--before" style={{width: imageWidth}}>
				<img src={beforeImg} alt={`Face before ${product}`} />
			</div>
			<input type="range" min="0" max="100" value={this.state.value} name="image-slider" className="BeforeAfter__image-slider" onChange={this.handleChange} />
		</div>
	}
}

export default BeforeAfter;
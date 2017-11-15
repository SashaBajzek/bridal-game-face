import React, {Component} from 'react';
import './StopMotion.css';

class StopMotion extends Component {
	state = {
		currentItem: 0,
		paused: true,
		totalItems: this.props.photos.length
	};
	
	componentDidMount() {
		var intervalId = setInterval(this.timer, 1000);
		this.setState({intervalId: intervalId});
		//this.setState({totalItems: 0})
	}
	
	componentWillUnmount() {
		clearInterval(this.state.intervalId)
	}
	
	timer = () => {
		if(!this.state.paused){
			if(this.state.currentItem < this.state.totalItems - 1){
				return this.setState({currentItem: this.state.currentItem + 1})
			} else {
				return this.setState({currentItem: 0})
			}
		}
	}
	
	togglePlay = () => {
		return this.setState({paused: !this.state.paused});
	}

	render() {
		const { photos } = this.props;
		return (
			<div>
				<img className="StopMotion__image" onClick={this.togglePlay} src={photos[this.state.currentItem].photo} alt="Testing makeup look in different lighting" />
				<button className={`StopMotion__toggle ${this.state.paused ? "StopMotion__toggle--paused" : "StopMotion__toggle--playing"}`} onClick={this.togglePlay}>Toggle Play</button>
				<h2>{this.state.currentItem + 1}</h2>
				<p>{photos[this.state.currentItem].description}</p>
			</div>
		)
	}
	
}

export default StopMotion;

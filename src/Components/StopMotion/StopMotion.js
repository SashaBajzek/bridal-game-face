import React, {Component} from 'react';
import './StopMotion.css';

import play from '../../Photos/Icons/Play.svg';
import pause from '../../Photos/Icons/Pause.svg';

//combine paused and rampUp

class StopMotion extends Component {
	state = {
		currentItem: 0,
		paused: true,
		rampUp: false,
		totalItems: this.props.photos.length
	};
	
	componentDidMount() {
		var intervalId = setInterval(this.timer, 1000);
		this.setState({intervalId: intervalId});
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
	
	getPlayButtonClass = () => {
		if(this.state.paused) {
			return "StopMotion__toggle--paused";
		}
		if(this.state.rampUp){
			return "StopMotion__toggle--playing StopMotion__toggle--rampUp";
		}
		return "StopMotion__toggle--playing";
	}
	
	togglePlay = () => {
		if (this.state.paused) {
			this.setState({rampUp: true});
			setTimeout(() => {
				this.setState({rampUp: false})
			}, 1000);
		}
		return this.setState({paused: !this.state.paused});
	}

	render() {
		const { photos } = this.props;
		const { currentItem, paused } = this.state;
		return (
			<div className="StopMotion">
				<img className="StopMotion__image" onClick={this.togglePlay} src={photos[currentItem].photo} alt="Testing in different lighting" />
				<button className={`StopMotion__toggle ${this.getPlayButtonClass()}`} onClick={this.togglePlay}>{paused ? <img className="StopMotion__play" src={play} alt="Play video"/> : <img className="StopMotion__pause" src={pause} alt="Pause video"/>}</button>
				<p className="StopMotion__description">{photos[currentItem].description}</p>
			</div>
		)
	}
	
}

export default StopMotion;

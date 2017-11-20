import React, {Component} from 'react';
import './StopMotion.css';

import play from '../../Photos/Icons/Play-Button.svg';
import pause from '../../Photos/Icons/Pause-Button.svg';

//combine paused and rampUp

class StopMotion extends Component {
	state = {
		currentItem: 0,
		videoState: "paused",
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
		if(this.state.videoState !== "paused"){
			const { currentItem, totalItems } = this.state;
		 
			this.setState({
				currentItem: currentItem < totalItems - 1 ? currentItem + 1 : 0
			});
		}
	}
	
	rampUp = () => {
		setTimeout(() => this.play(), 1000);
		this.setState({videoState: "rampingUp"});
	}
	play = () => this.setState({videoState: "playing"});
	pause = () => this.setState({videoState: "paused"});
	
	advanceVideoState = () => {
		this.state.videoState === "paused" ? this.rampUp() : this.pause();
	}

	render() {
		const { photos, title } = this.props;
		const { currentItem, videoState } = this.state;
		return (
			<div className="StopMotion">
				<h2 className="StopMotion__title">{title}</h2>
				<div>
					<img className="StopMotion__image" onClick={this.advanceVideoState} src={photos[currentItem].photo} alt="Testing in different lighting" />
					<button className={`StopMotion__toggle StopMotion__toggle--${videoState}`} onClick={this.advanceVideoState}>{videoState === "paused" ? <img className="StopMotion__play" src={play} alt="Play video"/> : <img className="StopMotion__pause" src={pause} alt="Pause video"/>}</button>
				</div>
				<p className="StopMotion__description">{photos[currentItem].description}</p>
			</div>
		)
	}
	
}

export default StopMotion;

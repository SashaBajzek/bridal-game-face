import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import StopMotion from './StopMotion';

import testPhoto1 from '../Videos/BlushVideo/BlushVideoPhotos/Blush1.jpg';
import testPhoto2 from '../Videos/BlushVideo/BlushVideoPhotos/Blush2.jpg';

const TestVideoList = [
	{
		photo: testPhoto1,
		description: "Test Description 1"
	},
	{
		photo: testPhoto2,
		description: "Test Description 1"
	}
]

var testTitle = "Test Video";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StopMotion photos={ TestVideoList } title={testTitle}/>, div);
});
	
it('should start in the paused state', () => {
	const output = shallow(<StopMotion photos={ TestVideoList } title={testTitle}/>);
	expect(output.state().videoState).toEqual('paused');
});
	
it('should change the state to rampingUp after clicking play button', () => {
	const output = shallow(<StopMotion photos={ TestVideoList } title={testTitle}/>);
	output.find('button').simulate('click');
	expect(output.state().videoState).toEqual('rampingUp');
});
	
it('should change the state to playing after 1 second of ramping up', async () => {
	expect.assertions(1);
	const output = shallow(<StopMotion photos={ TestVideoList } title={testTitle}/>);
	output.find('button').simulate('click');
	const promise = new Promise((resolve, reject) => setTimeout(() => resolve(), 1000));	
	await promise;
	expect(output.state().videoState).toEqual('playing');
	
});
	
it('should change the state to paused if video is ramping up and button is clicked', async () => {
	expect.assertions(1);
	const output = shallow(<StopMotion photos={ TestVideoList } title={testTitle}/>);
	output.find('button').simulate('click');
	output.find('button').simulate('click');
	const promise = new Promise((resolve, reject) => setTimeout(() => resolve(), 500));
	await promise;
	expect(output.state().videoState).toEqual('paused');
});
	
it('should change the state to paused if video is playing and button is clicked', async () => {
	expect.assertions(1);
	const output = shallow(<StopMotion photos={ TestVideoList } title={testTitle}/>);
	output.find('button').simulate('click');
	const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve(), 1000));
	await promise1;
	output.find('button').simulate('click');
	
	const promise2 = new Promise((resolve, reject) => setTimeout(() => resolve(), 1000));
	await promise2;
	expect(output.state().videoState).toEqual('paused');
});
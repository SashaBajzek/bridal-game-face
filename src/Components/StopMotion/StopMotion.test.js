import React from 'react';
import ReactDOM from 'react-dom';
import StopMotion from './StopMotion';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StopMotion photos={ } title="Test Video"/>, div);
});
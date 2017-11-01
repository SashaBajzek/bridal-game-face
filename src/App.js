import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import FullLook from './FullLook';
import NaturalLook from './NaturalLook';
import CleanUp from './CleanUp';
import Testing from './Testing';

class App extends Component {
  render() {
    return (
			<Router>
				<div>
					<Header />

					<Route exact path="/" component={Home} />
					<Route path="/full-look" component={FullLook} />
					<Route path="/natural-look" component={NaturalLook} />
					<Route path="/clean-up" component={CleanUp} />
					<Route path="/testing" component={Testing} />
				</div>
			</Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import FullLook from '../FullLook/FullLook';
import NaturalLook from '../NaturalLook/NaturalLook';
import CleanUp from '../CleanUp/CleanUp';
import Testing from '../Testing/Testing';
import Footer from '../Footer/Footer';
import './App.css';

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
			
					<Footer />
				</div>
			</Router>
    );
  }
}

export default App;

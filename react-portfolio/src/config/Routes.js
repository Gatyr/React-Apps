import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Main from '../components/Main'
import Experience from '../components/about/Experience'
import About from '../components/about/About'
import Home from '../components/Home'

import Projects from '../components/Projects'

class Routes extends Component {
	render() {
		return (
			<div>
				<Router>
						<Route component={Main}>
							<Route path='/' component={Home} />
							<Route path='info/about' component={About} />
							<Route path='info/experience' component={Experience} />
							<Route path='/projects' component={Projects} />								
						</Route>
				</Router>
			</div>
		);
	}
}
export default Routes
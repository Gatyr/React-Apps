import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Main from '../components/Main'
import Info from '../components/about/Info'
import About from '../components/about/About'

import Resume from '../components/about/Resume'

import Projects from '../components/Projects'
import Giphy from '../components/projects/Giphy'
import Train from '../components/projects/Train'

class Routes extends Component {
	render() {
		return (
			<div>
				<Router>
					<Main>
						<Switch>
							<Route exact path="/" component={Main}>
								<Route path="/info" component={Info} />
								<Route path="/about" component={About} /> 			
							</Route>
						
							<Route exact path="/projects" component={Projects}>
								<Route path="projects/giphy" component={Giphy}/>
								<Route path="projects/train" component={Train}/>
							</Route>
							<Route path="/resume" component={Resume} />
						</Switch>
					</Main>
				</Router>
			</div>
		);
	}
}

export default Routes

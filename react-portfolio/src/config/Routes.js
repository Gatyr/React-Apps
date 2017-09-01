import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Main from '../components/Main'
import Experience from '../components/about/Experience'
import About from '../components/about/About'
import Home from '../components/Home'

//import Resume from '../components/about/Resume'

import Projects from '../components/Projects'
// import Giphy from '../components/projects/Giphy'
// import Train from '../components/projects/Train'

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


/*

<Route exact path="/" component={Main}>
								<Route path="/info" component={Info} />
								<Route path="/about" component={About} /> 			
							</Route>
						
							<Route exact path="/projects" component={Projects}>
								<Route path="projects/giphy" component={Giphy}/>
								<Route path="projects/train" component={Train}/>
							</Route>
							<Route path="/resume" component={Resume} />
*/

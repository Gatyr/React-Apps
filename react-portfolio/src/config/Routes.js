import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Main from '../components/Main'
import Experience from '../components/about/Experience'
import About from '../components/about/About'
import Home from '../components/Home'

import Projects from '../components/Projects'
import Train from '../components/projects/Train'
import Giphy from '../components/projects/Giphy/Giphy'
import MySQL from '../components/projects/MySQL'
import Mongo from '../components/projects/Mongo/Mongo'
import NYTsearch from '../components/projects/NYTsearch/NYTsearchApp'

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
							<Route path='/giphy' component={Giphy}/>
							<Route path='/train' component={Train}/>
							<Route path='/mysql' component={MySQL}/>
							<Route path='/mongo' component={Mongo}/>
							<Route path='/nytsearch' component={NYTsearch}/>							
						</Route>
				</Router>
			</div>
		);
	}
}
export default Routes
import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

import Experience from './about/Experience'
import About from './about/About'
import Projects from './Projects'
import Tutorials from './Tutorials'
import ECMAscript  from './tutorials/ECMAscript/ECMAscript'
import PostgreSQL from './tutorials/PostgreSQL/PostgreSQL'
import ReactTutorial from './tutorials/ReactTutorial/ReactTutorial'
import MongoDB from './tutorials/MongoDB/MongoDB'

class Home extends Component {
	render() {
		return (
			<div id="home-div">
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1>Full-stack Web Developer</h1>
						<p>Based out of Austin, TX. </p>
					</div>
					<div id='jumbotron-footer'>
						<ul>	
							<li><Link to="/info/experience">My information</Link></li>
							<li><Link to="/info/about">About me</Link></li>
							<li><Link to='/projects'>Completed Projects</Link></li>
							<li><Link to='/tutorials'>Tutorials</Link></li>
						</ul>
					</div>
				</div>
				<div className="component-holder">
					<Route path="/info/experience" component={Experience}/>
					<Route path="/info/about" component={About}/>
					<Route path="/projects" component={Projects}/>
					<Route path="/tutorials" component={Tutorials}/>
					<Route path="/ecmascript" component={ECMAscript}/>
					<Route path="/postgresql" component={PostgreSQL}/>
					<Route path="/react" component={ReactTutorial}/>
					<Route path="/mongodb" component={MongoDB}/>
				</div>
			</div>
		)
	}
}

export default Home
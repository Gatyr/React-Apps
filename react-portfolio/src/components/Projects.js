import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

import Train from './projects/Train'
import Giphy from './projects/Giphy'

class Projects extends Component {
	render() {
		return (
			<div id="project-div">
				<nav className="navbar navbar-light">
					<ul>
						<li><a href="/">Home</a></li>
						<li><a href="/projects">Completed Projects</a></li>
						<li>In Progress</li>
					</ul>
				</nav>
				<nav className="navbar navbar-light" id="projects-nav">
					<ul>
						<li><Link to="/projects/giphy">Giphy</Link></li>
						<li><Link to="/projects/train">Train Scheduler</Link></li>
					</ul>
				</nav>
				<div className="component-holder">
					<Route path="projects/giphy" component={Giphy}/>
					<Route path="projects/train" component={Train}/>
				</div>
				<div className="footer">
					<ul>
						<li><a href="https://www.linkedin.com/in/daniel-ertel-moore-79ab2294/" alt=""><img src="../../logos/linkedin.png" alt=""/></a></li>
						<li><a href="https://www.github.com/gatyr" alt=""><img src="../../logos/githubwrong.png" alt=""/></a></li>
					</ul>
					<p>danielertelmoore@gmail.com</p>
				</div>
			</div>
		)
	}
}

export default Projects
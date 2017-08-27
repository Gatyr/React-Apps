import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

import Home from './Home'
import Projects from './Projects'

class Main extends Component {
	render() {
		return (
			<div id="main-div">
				<nav className="navbar navbar-light">
					<ul>
						<li><Link to="/info/experience">About Me</Link></li>
						<li><Link to="/projects">Completed Projects</Link></li>
						<li>In Progress</li>
					</ul>
				</nav>
				<div id="main-content-div">
					<Route path="/" component={Home} />
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

export default Main

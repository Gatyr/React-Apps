import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

import Info from './about/Info'
import About from './about/About'

class Main extends Component {
	render() {
		return (
			<div id="main-div">
				<nav className="navbar navbar-light">
					<ul>
						<li><a href="/">Home</a></li>
						<li><a href="/projects">Completed Projects</a></li>
						<li>In Progress</li>
					</ul>
				</nav>
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1>Full-stack Web Developer</h1>
						<p>Based out of Austin, TX. </p>
					</div>
					<div className="container" id="jumbotron-footer">
						<Link to="/info">My information</Link>
						<Link to="/about">About me</Link>
					</div>
				</div>
				<div className="component-holder">
					<Route path="/info" component={Info} />
					<Route path="/about" component={About} />
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
import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import Home from './Home'

class Main extends Component {
	render() {
		return (
			<div id="outer-div">
				<div id="main-div">
					<nav className="navbar navbar-light">
						<h3>Daniel Ertel-Moore</h3>
					</nav>
					<div id="main-content-div">
						<Route path="/" component={Home} />
					</div>
				</div>
				<div className="footer" id="main-footer">
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

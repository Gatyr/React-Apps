import React, {Component} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

import picDesc from '../../utils/projects'

class MySQL extends Component {
	constructor(props) {
		super(props);
		this.state = {src: 1}

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event) {
		this.setState({src: event.target.value})
	}
	render() {
		return (
			<div className="component-holder" id="project-summary">
				<a href="https://github.com/Gatyr/MySQL-Storefront"><h1>MySQL Storefront</h1></a>
				<div className="container" id="lsit">
					<div className="col-md-3" id="tech-used">
						<h4>What I used:</h4>
						<ul>
							<li>JavaScript</li>
							<li>Node.js</li>
							<li>SQL</li>
							<li>MySQL Workbench</li>
						</ul>
					</div>
					<div className="col-md-6" id="project-picture">
						<div className="img-link-btns">
							<button className="btn btn-link" onClick={this.handleClick} value="1">1</button>
							<button className="btn btn-link" onClick={this.handleClick} value="2">2</button>
						</div>
						<img id="myImg" src={"/project-images/MySQLStore/MySQL"+ this.state.src + ".png"} alt="" width="500" height="266"/>
						<p>{picDesc.mysql[this.state.src - 1]}</p>
					</div>
					<div className="col-md-3" id="what-I-learned">
						<h4>What I learned:</h4>
						<ul>
							<li>SQL syntax</li>
							<li>Inquirer Node module</li>
							<li>Managing SQL databases with MySQL Workbench</li>
							<li></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default MySQL
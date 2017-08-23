import React, {Component} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

import picDesc from '../../utils/projects'

class Routing extends Component {
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
				<a href="https://github.com/Gatyr/React-Apps/tree/master/Simple-React-Routing-App"><h1>Simple React Router App</h1></a>
				<div className="container" id="lsit">
					<div className="col-md-3" id="tech-used">
						<h4>What I used:</h4>
						<ul>
							<li>HTML</li>
							<li>JavaScript</li>
							<li>React</li>
						</ul>
					</div>
					<div className="col-md-6" id="project-picture">
						<div className="img-link-btns">
							<button className="btn btn-link" onClick={this.handleClick} value="1">1</button>
							<button className="btn btn-link" onClick={this.handleClick} value="2">2</button>
							<button className="btn btn-link" onClick={this.handleClick} value="3">3</button>
						</div>
						<img id="myImg" src={"/project-images/ReactRouter/reactrouter"+ this.state.src + ".png"} alt="" width="500" height="266"/>
						<p>{picDesc.routing[this.state.src - 1]}</p>
					</div>
					<div className="col-md-3" id="what-I-learned">
						<h4>What I learned:</h4>
						<ul>
							<li>ES6</li>
							<li>JSX</li>
							<li>How to render specific React components depeneding on the path</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Routing
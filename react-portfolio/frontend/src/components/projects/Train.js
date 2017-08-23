import React, {Component} from 'react'

import picDesc from '../../utils/projects'

class Train extends Component {
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
				<a href="https://github.com/Gatyr/Train-Scheduler"><h1>Train Scheduler</h1></a>
				<div className="container" id="lsit">
					<div className="col-md-3" id="tech-used">
						<h4>What I used:</h4>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>Bootstrap</li>
							<li>JavaScript</li>
							<li>jQuery</li>
							<li>Firebase</li>
						</ul>
					</div>
					<div className="col-md-6" id="project-picture">
						<div className="img-link-btns">
							<button className="btn btn-link" onClick={this.handleClick} value="1">1</button>
							<button className="btn btn-link" onClick={this.handleClick} value="2">2</button>
							<button className="btn btn-link" onClick={this.handleClick} value="3">3</button>
						</div>
						<img id="myImg" src={"/project-images/Train/Train"+ this.state.src + ".png"} alt="" width="500" height="266"/>
						<p>{picDesc.train[this.state.src - 1]}</p>
					</div>
					<div className="col-md-3" id="what-I-learned">
						<h4>What I learned:</h4>
						<ul>
							<li>The value of JS libraries and Moment.js</li>
							<li>How to make use of a database</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Train

/*
Call info from /utils/projects.js

Set page to render that information in appropriate/specified way

*/
import React, {Component} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

import picDesc from '../../utils/projects'

class Giphy extends Component {
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
				<a href="https://github.com/Gatyr/API-giphy"><h1>Giphy</h1></a>
				<div className="container" id="lsit">
					<div className="col-md-3" id="tech-used">
						<h4>What I used:</h4>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>Bootstrap</li>
							<li>JavaScript</li>
							<li>jQuery</li>
							<li>Giphy API</li>
						</ul>
					</div>
					<div className="col-md-6" id="project-picture">
						<div className="img-link-btns">
							<button className="btn btn-link" onClick={this.handleClick} value="1">1</button>
							<button className="btn btn-link" onClick={this.handleClick} value="2">2</button>
							<button className="btn btn-link" onClick={this.handleClick} value="3">3</button>
							<button className="btn btn-link" onClick={this.handleClick} value="4">4</button>
							<button className="btn btn-link" onClick={this.handleClick} value="5">5</button>
						</div>
						<img id="myImg" src={"/project-images/Giphy/Giphy"+ this.state.src + ".png"} alt="" width="500" height="266"/>
						<p>{picDesc.giphy[this.state.src - 1]}</p>
					</div>
					<div className="col-md-3" id="what-I-learned">
						<h4>What I learned:</h4>
						<ul>
							<li>DOM manipulation</li>
							<li>AJAX calls</li>
							<li>How to utilize click events</li>
							<li>How to handle form submissions</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Giphy


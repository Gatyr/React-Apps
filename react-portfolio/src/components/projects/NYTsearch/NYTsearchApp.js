import React, {Component} from 'react'
import picDesc from '../../../utils/projects'

import NYTmain from './NYTmain'

class NYTsearch extends Component {
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
				<a href="https://github.com/Gatyr/React-Apps/tree/master/react-nyt-search-app"><h1>NYT Search React App</h1></a>
				<div className="container" id="lsit">
					<div className="col-md-3" id="tech-used">
						<h4>What I used:</h4>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>Bootstrap</li>
							<li>JavaScript</li>
							<li>jQuery</li>
							<li>Node.js</li>
							<li>Express</li>
							<li>Mongoose</li>
							<li>React</li>
							<li>NYT API</li>
						</ul>
					</div>
					<div className="col-md-6" id="project-picture">
						<div className="img-link-btns">
							<button className="btn btn-link" onClick={this.handleClick} value="1">1</button>
							<button className="btn btn-link" onClick={this.handleClick} value="2">2</button>
							<button className="btn btn-link" onClick={this.handleClick} value="3">3</button>
							<button className="btn btn-link" onClick={this.handleClick} value="4">4</button>
							<button className="btn btn-link" onClick={this.handleClick} value="5">5</button>
							<button className="btn btn-link" onClick={this.handleClick} value="6">6</button>
						</div>
						<img id="myImg" src={"/project-images/NYTsearchReact/nytsearch"+ this.state.src + ".png"} alt="" width="500" height="266"/>
						<p>{picDesc.nytsearch[this.state.src - 1]}</p>
					</div>
					<div className="col-md-3" id="what-I-learned">
						<h4>What I learned:</h4>
						<ul>
							<li>Setting up a database with a React app is more difficult than I expected</li>
							<li>React lexical scoping and properly binding 'this' in the constructor</li>
							<li>State and prop usage, as well as properly setting the state", "Event handling and, specifically, handling user text input when using that data for API or backend calls</li>
						</ul>
					</div>
				</div>
				<div className="container demo" id="NYTsearch-demo">
					<NYTmain />
				</div>
			</div>
		)
	}
}

export default NYTsearch
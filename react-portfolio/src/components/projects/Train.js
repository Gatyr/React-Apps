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
							<li><img src="/logos/HTML5.png" alt="" /></li>
							<li><img src="/logos/CSS.png" alt="" /></li>
							<li><img src="/logos/javascript.png" alt="" /></li>
							<li><img src="/logos/jquery.gif" alt="" /></li>
							<li><img src="/logos/bootstrap.png" alt="" /></li>
							<li><img src="/logos/giphy.gif" alt="" /></li>
							<li><img src="/logos/firebase.png" alt="" /></li>
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
						<h4>What's going on with the app</h4>
						<ul>
							<li>First I created an object constructor for the trains. This involved setting a few attributes about the train, 
							and creating a few methods to correctly calculate and display things involving time. Moment.js was invaluable here.</li>
							<li>After that was setup, I made a jQuery function to display the trains and their information on the page</li>
							<li>Finally, I created a function that would append a new train to the table, and insert the train's information into 
							the firebase database when it was working.</li>
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
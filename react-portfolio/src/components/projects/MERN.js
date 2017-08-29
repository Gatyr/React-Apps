import React, {Component} from 'react'
import picDesc from '../../utils/projects'

class MERN extends Component {
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
				<a href="https://github.com/Gatyr/React-Apps/tree/master/simple-mern-app"><h1>Simple MERN App</h1></a>
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
							<li>Mongoose</li>
							<li>Express</li>
							<li>React</li>
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
						<img id="myImg" src={"/project-images/mern/mern"+ this.state.src + ".png"} alt="" width="500" height="266"/>
						<p>{picDesc.mern[this.state.src - 1]}</p>
					</div>
					<div className="col-md-3" id="what-I-learned">
						<h4>What I learned:</h4>
						<ul>
							<li>How to connect the frontend with the backend in a neat, unconfusing way</li>
							<li>componentWillMount() and componentDidMount life-cycle hooks</li>
							<li>How to use methods to handle changes by the user and utilize those changes in communicating with the backend</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default MERN
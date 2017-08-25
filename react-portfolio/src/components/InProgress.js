import React, {Component} from 'react'

class InProgress extends Component {
	constructor(props) {
		super(props);
		this.state = {src: 1}

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event) {
		this.setState({src: event.target.value})
	}
	render() {
		return(
			<div className="container" id="in-progress">
				<h1>*Name of project here*</h1>
				<div className="outline">
					<div>
						<h4>What I plan to do:</h4>
						<ul>
							<li>*outline point here*</li>
							<li>*outline point here*</li>
							<li>*outline point here*</li>
							<li>*outline point here*</li>
							<li>*outline point here*</li>
						</ul>
					</div>
					<div>	
						<h4>What I hope to accomplish in completing this app</h4>
						<ul>
							<li>*what I hope to accomplish here*</li>
							<li>*what I hope to accomplish here*</li>
							<li>*what I hope to accomplish here*</li>
							<li>*what I hope to accomplish here*</li>
							<li>*what I hope to accomplish here*</li>
							<li>*what I hope to accomplish here*</li>
						</ul>
					</div>
				</div>
				<div className="container" id="recent-progress">
					<h2>What I worked on previously</h2>
					<div className="col-md-3">
						
					</div>
				</div>
			</div>
		)
	}
}
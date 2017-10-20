import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'

import Overview from './Overview'
import Code from './Code'

class Train extends Component {
	constructor(props) {
		super(props);
		this.state = {src: 1}

		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount () {
		window.scrollTo(0, 0)
	}	
	handleClick(event) {
		this.setState({src: event.target.value})
	}
	render() {
		return (
			<div className="component-holder" id="project-summary">
				<div className="project-navbar" id="giphy-nav">
					<Link to="/train/overview"><h4>Overview</h4></Link>
					<Link to="/train/code"><h4>Code Description</h4></Link>
				</div>
				<a href="https://github.com/Gatyr/train-scheduler"><h1>Train Scheduler on GitHub</h1></a>
				<div className="component-holder-2">
					<Route path="/train/overview" render={(props) => (
						<Overview {...props} projectName='train' />
					)} />
					<Route path="/train/code" render={(props) => (
						<Code {...props} projectName='train' />
					)} />
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
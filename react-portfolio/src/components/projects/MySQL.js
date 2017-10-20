import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'

import Overview from './Overview'
import Code from './Code'

class MySQL extends Component {
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
					<Link to="/mysql/overview"><h4>Overview</h4></Link>
					<Link to="/mysql/code"><h4>Code Description</h4></Link>
				</div>
				<a href="https://github.com/Gatyr/MySQL-Storefront"><h1>MySQL Storefront on GitHub</h1></a>
				<div className="component-holder-2">
					<Route path="/mysql/overview" render={(props) => (
						<Overview {...props} projectName='mysql' />
					)} />
					<Route path="/mysql/code" render={(props) => (
						<Code {...props} projectName='mysql' />
					)} />
				</div>
			</div>
		)
	}
}

export default MySQL

/*

First, please have a look at my portfolio at danielertel.herokuapp.com

Second, please note I would be willing to relocate for this position. 

That said, hi! My name is Daniel, but friends and coworkers usually call my Danny, and I hope you will as well. In March of 2017 I decided to take my savings, quit my job, and put all of my effort into transitioning into a career as a web developer. Ever since, I've been learning as much as I can in order to make that happen. I think this position at eWebify would be a perfect opportunity to contribute to a new company and grow as a developer.

I realize that you are looking for a candidate with more formal experience than myself, but I wholly believe that I am prepared to jump right in and make an impact from day one. To start, I'm a hard worker when it comes to learning new methods, and I know that I would be able to quickly acclimate myself to the new environment and meet or exceed expectations. In addition to that, I'm excellent at working with others and maneuvering such that the success of the team is ensured. 

With the combination of my experience in team-oriented environments and my ability to work as a self-starter and learn new things, I feel confident that I would make a great addition to the eWebify team. Thank you for taking the time to review my application, and I look forward to hearing from you soon. 

*/
import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'

import Demo from './Demo'
import Overview from '../Overview'
import Code from '../Code'


class Giphy extends Component {
	componentDidMount () {
		window.scrollTo(0, 0)
	}
	render() {
		return (
			<div className="component-holder" id="project-summary">
				<div className="project-navbar" id="giphy-nav">
					<Link to="/giphy/overview"><h4>Overview</h4></Link>
					<Link to="/giphy/code"><h4>Code Description</h4></Link>
					<Link to="/giphy/demo"><h4>Demo</h4></Link>
				</div>
				<a href="https://github.com/Gatyr/API-giphy"><h1>Giphy on GitHub</h1></a>
				<div className="component-holder-2">
					<Route path="/giphy/overview" render={(props) => (
						<Overview {...props} projectName='giphy' />
					)} />
					<Route path="/giphy/code" render={(props) => (
						<Code {...props} projectName='giphy' />
					)} />
					<Route path="/giphy/demo" component={Demo}/>
				</div>
			</div>
		)
	}
}

export default Giphy

/*
Problem(s) I was having:

1) input for new button field wasn't updating state on submit

	How I fixed the problem:

	1 - set a value tag equal to this.state.inputValue 
	2 - created a method to set the state equal to the value
	3 - set an onChange tag that passes a parameter to the updateInputValue method

2) passing state to child component
	
	How I fixed it:

	1 - render component in div
	2 - set desired state key equal to this.state.*desired state key here*
	3 - this passes the state to the child component as a prop


to do: 
	take new inputValue state, find a way to render a new button

		new component for giphy app; 

	detect a button category click and call on the giphy API for 10 .gifs related to the category,
	and render those gifs in a div below

*/
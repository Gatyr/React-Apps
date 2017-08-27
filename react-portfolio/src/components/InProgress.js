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
				<h1>Making my site responsive</h1>
				<p>So apparently I need to make my site more responsive so that it looks acceptable on mobile platforms. It would be nice if 
				all I needed to do was to add a qualifying expression to my .css file like:</p>
				<p>#div-element-id (min-width: 1000px)</p>
				<p>and then set the style changes is the viewport is wider than 1000 pixels. That's not how it works, though, so I will be 
				chronicling what I learn here in order to make this site more responsive!</p>
			</div>
		)
	}
}
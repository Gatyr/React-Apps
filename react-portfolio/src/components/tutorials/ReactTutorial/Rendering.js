import React, {Component} from 'react'

class Rendering extends Component {
	constructor(props) {
		super(props);
		this.state = {time: ''}
		this.clock = this.clock.bind(this);
	}
	clock() {
		const time = new Date().toLocaleTimeString();
		console.log(time);
		this.setState({time: time})

	}
	componentDidMount() {
		setInterval(this.clock(), 1000)
	}
	render() {
		return (
			<div id="rendering-div">
				<h1>The TL;DR of Rendering Elements in React</h1>
				<div className="tutorial-section-div">
					<p>An element describes what you want to see on the screen.</p>
					<div className="code">const element = {"<h1>Hello world</h1>"};</div>
					<p>React elements are plain object, and React DOM takes care of updating the DOM to match React elements.</p>
					<div className="code"><p>Please note: elements !== components. Elements make up components.</p></div>
				</div>
				<h3>Rendering an element into the DOM</h3>
				<div className="tutorial-section-div">
					<p>Suppose you have a {"<div>"}:</p>
					<div className="code"><p>{"<div id='root'></div>"}</p></div>
					<p>This is a "root" DOM node because everything inside will be managed by React DOM.</p>
					<p>To render a React element into a root DOM node:</p>
					<img src="../../../project-images/react-tutorial/renderDOM.png" alt="" />
				</div>
				<h3>Updating the Rendered Element</h3>
				<div className="tutorial-section-div">
					<p>React elements are immutable (cannot be changed once rendered)</p>
					<h4>Consider this ticking clock example:</h4>
					<img src="../../../project-images/react-tutorial/elementUpdate.png" alt="" />
					<p>React compares the element and its children to the previous one, and only updates what's necessary to bring DOM to desired state</p>
					<p>Thinking about how the UI should look at any given moment is better than how to change it over time</p>
				</div>
				<h1>The time is {this.state.time}</h1>
			</div>
		)
	}
}

export default Rendering

/*

clock() {
		const boop = new Date().toLocaleTimeString();
		setInterval(this.setState({time: boop}));
		const element = (
			<div>
				<h1>Hello, world</h1>
				<h2>It is {this.state.time}</h2>
			</div>
		)
		return (element);
	}
{setInterval(this.clock(), 1000)}
	*/
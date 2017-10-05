import React, {Component} from 'react'

class ComProps extends Component {
	render() {
		return (
			<div id="comprops-div">
				<h1>The TL;DR of Components and Props</h1>
				<div className="tutorial-section-div">
					<p>Components are independent and reusable. They are similar to JS functions in that they accept 
					arbitrary inputs (called "props") and return React elements describing what should appear</p>
				</div>
				<h3>Functional and Class Components</h3>
				<div className="tutorial-section-div">
					<p>The simplest way to define a component:</p>
					<div className="code">
						<p>function Welcome(props) {"{"}</p>
						<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return {"<h1>Hello, {props.name}</h1>;"}</p>
						<p>{"}"}</p>
					</div>
					<p>This is a valid React component because it accepts the "props" object argument anf returns a React element.</p>
					<p>ES6 classes can be used to define a component:</p>
					<img src="../../../project-images/react-tutorial/es6class.png" alt=""/>
				</div>
				<h3>Rendering a Component</h3>
				<div className="tutorial-section-div">
					<p>Elements can represent user-defined components:</p>
					<img src="../../../project-images/react-tutorial/renderComponent.png" alt="" />
					<p>What's happening here:</p>
					<ol>
						<li>We call ReactDOM.render() with the {"<Welcome name='Sara'/>"} element</li>
						<li>React calls the Welcome component with {"{name: 'Sara'}"} as the props</li>
						<li>Our Welcome component returns a {"<h1>Hello, Sara</h1>"} element as a result</li>
						<li>React DOM efficiently updates the DOM to match {"<h1>Hello, Sara</h1>"}</li>
					</ol>
					<div className="code">
						<h4>Caveat:</h4>
						<p>Always start component names with a capital letter</p>
					</div>
				</div>
				<h3>Composing Components</h3>
				<div className="tutorial-section-div">
					<p>Components can refer to other components in their output. This lets us use the same component 
					abstraction for any level of detail</p>
					<p>For example:</p>
					<img src="../../../project-images/react-tutorial/composingComponents.png" alt=""/>
					<p>This also allows us to use different components in their output. One example from my own work:</p>
					<img src="../../../project-images/react-tutorial/composingComponents2.png" alt=""/>
					<p>Here you see two components nested in another component. Which component gets displayed is dependent upon the route
					path for the browser, but the outer-component refers to one or the other in its output.</p>
				</div>
				<h3>Props are Read-Only</h3>
			</div>
		)
	}
}

export default ComProps


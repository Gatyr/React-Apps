import React, {Component} from 'react'

class JSX extends Component {
	render() {
		return (
			<div id="JSX-div">
				<h1>The TL;DR of JSX</h1>
				<div className="jsx-element">
					<p>Consider the line:</p>
					<div className="code">{"const element = <h1>Hello, world!</h1>"}</div>
					<ul>
						<li>Not a string</li>
						<li>Not HTML</li>
					</ul>
					<p>It's JSX, a preprocessor XML syntax to JavaScript.</p>
				</div>
				<h3>Embedding Expressions in JSX</h3>
				<div className="jsx-element">
					<p>You can embed any JavaScript expression in JSX by wrapping it in curly braces:</p>
					<img src="../../../project-images/react-tutorial/JSXwithCB.png" alt="" />
					<p>Note the function calls and the "this" keyword in what are otherwise normal lines of HTML.</p>
				</div>
				<h3>JSX is an Expression too</h3>
				<div className="jsx-element">
					<p>After being compiled, JSX expressions become regular JS objects, which means you can use JSX inside of conditionals and loops:</p>
					<img src="../../../project-images/react-tutorial/JSXinLoop.png" alt=""/>
					<p>This also means you can assign it to variables, accept it as arguments, and return it from functions.</p>
				</div>
				<h3>Specifying Attributes with JSX</h3>
				<div className="jsx-element">
					<p>Note in the above examples how the attributes are specified...quotes are used to specify a string, and curly brackets are used to specify the result of some JS call</p>
					<p>Just remember: </p>
					<ul>
						<li>Quotes for string literal</li>
						<li>Curly braces for expressions</li>
						<li>Not both</li>
					</ul>
				</div>
				<h3>Specifying Children in JSX</h3>
				<div className="jsx-element">
					<p>If a tag is empty, you may close it immediately with '/>':</p>
					<img src="../../../project-images/react-tutorial/JSXemptyTag.png" alt="" />
					<p>A tag may contain children</p>
					<img src="../../../project-images/react-tutorial/JSXwithChildren.png" alt="" />
					<h4>Please note!</h4>
					<p>"class" is a protected word in JSX, so "className" is used to specify element class names</p>
				</div>
				<h3>JSX Prevents <a href="https://www.acunetix.com/blog/articles/injection-attacks/">Injection Attacks</a></h3>
				<div className="jsx-element">
					<p>It is safe to embed user input in JSX:</p>
					<div className="code">{"const title = response.potentiallyMaliciousInput;"}<br/>
					{"//this is safe"}<br/>
					{"const element = <h1>{title}</h1>"}
					</div>
					<p>ReactDOM escapes any values embedded in JSX, thus ensuring that nothing is injected unless explicitly written in the APP.</p>
					<p>This is because everything is converted into a string, preventing cross-site-scripting attacks.</p>
				</div>
				<h3>JSX Represents Objects</h3>
				<div className="jsx-element">
					<p>Babel compiles JSX down to React.createElement() calls, which creates an object:</p>
					<img src="../../../project-images/react-tutorial/JSXrepresentsObjects.png" alt="" />
					<p>These are "React elements," and they are what React reads to construct the DOM</p>
				</div>
			</div>
		)
	}
}

export default JSX
import React, {Component} from 'react'

import picDesc from '../../utils/projects'

let btnArray = ["Futurama", "Breaking Bad", "Game of Thrones", "Westworld", "The Simpsons", "Pixar", "Disney", "Coffee", 
		"Jurassic Park", "James Bond", "Watchmen", "Donald Trump", "The Endocrine System", "No Results", "Topic for which no GIFs exist", 
		"Tumblr Gifs"];

class Giphy extends Component {
	constructor(props) {
		super(props);
		this.state = {src: 1, inputValue: ''}

		this.handleClick = this.handleClick.bind(this);
		this.renderButtons = this.renderButtons.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		//this.handleChange = this.handleChange.bind(this);
	}
	handleClick(event) {
		this.setState({src: event.target.value})
	}
	renderButtons() {
		return btnArray.map(function(item, i) {
			let btnID = btnArray[i].replace(/\s+/g, "+");
			return <button type='button' className="btn btn-info" key={i} id={btnID}>{btnArray[i]}</button>
		})
	}
	handleSubmit(event) {
		event.preventDefault();

		var newCategory = this.state.inputValue;
		console.log(newCategory);
	}
	updateInputValue(evt) {
		this.setState({
			inputValue: evt.target.value
		});
	}
	render() {
		return (
			<div className="component-holder" id="project-summary">
				<a href="https://github.com/Gatyr/API-giphy"><h1>Giphy</h1></a>
				<div className="container" id="lsit">
					<div>
						<div className="col-md-3" id="tech-used">
							<h4>What I used:</h4>
							<ul>
								<li>HTML</li>
								<li>CSS</li>
								<li>Bootstrap</li>
								<li>JavaScript</li>
								<li>jQuery</li>
								<li>Giphy API</li>
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
						<img id="myImg" src={"/project-images/Giphy/Giphy"+ this.state.src + ".png"} alt="" width="500" height="266"/>
						<p>{picDesc.giphy[this.state.src - 1]}</p>
					</div>
						<div className="col-md-3" id="what-I-learned">
							<h4>What I learned:</h4>
							<ul>
								<li>DOM manipulation</li>
								<li>AJAX calls</li>
								<li>How to utilize click events</li>
								<li>How to handle form submissions</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="container" id="giphy-dem">
					<h3>This is a demonstration of the app</h3>
					<p>I originally developed the app to gain an understanding of how to use an API, manipulate the DOM with jQuery, and 
					integrate Boostrap in my design. My github repo for the app will still reflect my learning, but this demonstration will
					rely on my understanding of React in order to achieve the same working model.</p>
					<div id="buttons-div">
						{this.renderButtons()}
					</div>
					<div id="add-button-div">
						<h4>Add a button:</h4>
						<form className="form-horizontal">
							<input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} /> 
						</form>
						<button className="btn btn-info" onClick={this.handleSubmit}>Submit</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Giphy

/*
Problem I was having:

input for new button field wasn't updating state on submit

How I fixed the problem:

1 - set a value tag equal to this.state.inputValue 
2 - created a method to set the state equal to the value
3 - set an onChange tag that passes a parameter to the updateInputValue method

to do: 
	take new inputValue state, find a way to render a new button

	detect a button category click and call on the giphy API for 10 .gifs related to the category,
	and render those gifs in a div below

*/
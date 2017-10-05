import React, {Component} from 'react'

import GifImages from './GifImages'
//import picDesc from '../../../utils/projects'

let btnArray = ["Futurama", "Overwatch", "King of the Hill", "Football", "The Simpsons", "Pixar", "Disney", "Coffee", 
		"Jurassic Park", "James Bond", "Batman", "The Endocrine System", "No Results"];

class Giphy extends Component {
	constructor(props) {
		super(props);
		this.state = {
			src: 1, 
			inputValue: '', 
			buttons: btnArray, 
			category: ''
		}
		this.handleClick = this.handleClick.bind(this);
		this.renderButtons = this.renderButtons.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCategorySelect = this.handleCategorySelect.bind(this);
	}
	handleClick(event) {
		this.setState({src: event.target.value})
	}
	renderButtons() {
		return btnArray.map(function(item, i) {
			let btnID = btnArray[i].replace(/\s+/g, "+");
			return <button type='button' className="btn btn-info" onClick={this.handleCategorySelect} key={i} id={btnID} value={btnID}>{btnArray[i]}</button>
		}, this)
	}
	handleCategorySelect(event) {
		this.setState({category: event.target.value});
	}
	handleSubmit(event) {
		event.preventDefault();

		var newCategory = this.state.inputValue;
		console.log(newCategory);
		btnArray.push(newCategory);
		console.log(btnArray);
		this.setState({buttons: btnArray});
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
								<li><img src="/logos/HTML5.png" alt=""/></li>
								<li><img src="/logos/CSS.png" alt=""/></li>
								<li><img src="/logos/javascript.png" alt=""/></li>
								<li><img src="/logos/jquery.gif" alt=""/></li>
								<li><img src="/logos/bootstrap.png" alt=""/></li>
								<li><img src="/logos/giphy.gif" alt=""/></li>
							</ul>
						</div>
						
						<div className="col-md-6" id="project-picture">
							<div className="video-player">
								<iframe title="Giphy" src="https://player.vimeo.com/video/233887822" width="640" height="290" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="https://vimeo.com/233887822">Giphy</a> from <a href="https://vimeo.com/user791506">Gatyr</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
							</div>
						</div>

						<div className="col-md-3" id="what-I-learned">
							<h4>What's going on behind the scenes</h4>
							<ul>
								<li>First I created an array of subjects for the user to choose from, and used jQuery to render a series of buttons
								to click on. Each button was given an ID-attribute that corresponds with what will be passed to the Giphy API call</li>
								<li>Then I created a way for the user to submit a subject which, upon submission, would render a new button that could be 
								clicked in order to display results for the new subject</li>
								<li>Finally, the AJAX call to the Giphy API...</li>
								<li>I set a jQuery method so that anytime a button is clicked, the results div would be emptied and an AJAX call would be made</li>
								<li>Once the call was made, I looped through every result and used jQuery to assign various data-attributes for DOM manipulation in the future</li>
								<li>Finally, I added a function so that whenever an image is clicked on, whether it was moving or still, the image would switch to the 
								opposite state</li>
							</ul>
						</div>
					</div>
				</div>
				{/*<div className="container how-it-works">
					<h3>How it works</h3>
					<div className="code-descriptor-div">
						<img src="/project-images/Giphy/code1.png" alt="" />
						<div className="code-descriptor-text">
							<p>Set a variable equal to an array of strings for our stock buttons.</p>
							<p>Create a function that, when called, will:</p>
							<ol>
								<li>Empty the buttons div</li>
								<li>Loop through the buttonArray</li>
								<li>Create a new variable 'a' equal to a new jQuery element to form a button</li>
								<li>Create a new variable 'btnID' that will act as the search string for the Gihpy API call</li>
								<li>Add the id attribute and the button text</li>
								<li>Finally, append the jQuery element to the buttons div</li>
							</ol>
						</div>
					</div>
					<div className="code-descriptor-div">
						<img src="/project-images/Giphy/code2.png" alt="" />
						<div className="code-descriptor-text">
							<p>jQuery selector for each button that, when clicked, will:</p>
							<ol>
								<li>set the subject for the API call equal to the ID of the button</li>
								<li>set the URL for the AJAX call with that subject</li>
								
							</ol>
						</div>
					</div>
				</div>*/}
				
				<div className="container demo" id="giphy-demo">
					<h3>This is a demonstration of the app</h3>
					<p>I originally developed the app to gain an understanding of how to use an API, manipulate the DOM with jQuery, and 
					integrate Boostrap in my design. My github repo for the app will still reflect my learning, but this demonstration will
					rely on my understanding of React in order to achieve the same working model. Depending on your connection speed, this may take a while.</p>
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
					<div id="gif-component">
						<GifImages category={this.state.category}/>
					</div>
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
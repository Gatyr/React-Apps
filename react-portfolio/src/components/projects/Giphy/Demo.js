import React, {Component} from 'react'
import axios from 'axios'

import GifImage from './GifImage'

let btnArray = ["Futurama", "Overwatch", "King of the Hill", "Football", "The Simpsons", "Pixar", "Disney", "Coffee", 
		"Jurassic Park", "James Bond", "Batman", "The Endocrine System", "No Results"];

class Demo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: {},
			src: 1, 
			inputValue: '', 
			buttons: btnArray, 
			category: ''
		}
		this.handleClick = this.handleClick.bind(this);
		this.renderButtons = this.renderButtons.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCategorySelect = this.handleCategorySelect.bind(this);
		this.renderGifs = this.renderGifs.bind(this);
		this.retrieveURLs = this.retrieveURLs.bind(this);
		this.onImageClick = this.onImageClick.bind(this);
	}
	handleClick(event) {
		this.setState({src: event.target.value})
	}
	onImageClick(e) {
		console.log("click handled");
		this.props.handleImageClick();

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
	retrieveURLs() {
		let subject = this.state.category;
		let giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + subject + "&api_key=dc6zaTOxFJmzC";
		let rawStillUrlArray = [];
		let rawMovingUrlArray = [];
		let urlObject = {};

			let test = axios.get(giphyURL).then(function(results){
				//console.log(results);
				for (let i=0; i<results.data.data.length-15; i++) {
					rawMovingUrlArray.push(results.data.data[i].images.fixed_height.url);
				}
				for (let q=0; q<results.data.data.length-15; q++) {
					rawStillUrlArray.push(results.data.data[q].images.fixed_height_still.url);
				}
				for (let v=0; v<rawStillUrlArray.length; v++) {
					urlObject[v] = {
						still: rawStillUrlArray[v],
						moving: rawMovingUrlArray[v]
					}
				}
				return urlObject
			}).then(function(results1) {
				//take each key in the URLobject
				for (let p=0; p<10; p++) {
					//create a temporary array with the values
					let tempStill = urlObject[p].still;
					let tempMoving = urlObject[p].moving;
					//find the index after .gif
					for (let t=0; t<tempStill.length; t++) {
						if ((tempStill[t-3] === "g") && (tempStill[t-2] === "i") && (tempStill[t-1] === "f")) {
							//remove everything after gif
							let temp1 = tempStill.slice(0, t);
							urlObject[p].still = temp1;
						}
					}
					for (let t=0; t<tempMoving.length; t++) {
						if ((tempMoving[t-3] === "g") && (tempMoving[t-2] === "i") && (tempMoving[t-1] === "f")) {
							//remove everything after gif
							let temp2 = tempMoving.slice(0, t);
							urlObject[p].moving = temp2;
						}
					}
				}
				return urlObject;
			});	
			return test
	}
	renderGifs() {
		let subject = this.state.category;
		if (subject) {
			this.retrieveURLs().then(results => {
				this.setState({ images: results })
				//console.log(results);
			}, this);
			let imagesObject = this.state.images;
			return Object.keys(imagesObject).map(function(key, index) {
				let urlArray = [imagesObject[key].still, imagesObject[key].moving];
				return (
					<div className="gif-holder" key={index} id={index}>
						{/*<img src={imagesObject[key].still} data-state="still" data-still={imagesObject[key].still} 
						data-moving={imagesObject[key].moving} alt="" />*/}
						<GifImage url={urlArray} onClick={evt => this.onImageClick(evt)}/>
					</div>
				)
			});
		}
	}
	render() {
		return(
			<div className="container demo" id="giphy-demo">
				<h3>This is a demonstration of the app</h3>
				<p>I originally developed the app to gain an understanding of how to use an API, manipulate the DOM with jQuery, and 
				integrate Boostrap in my design. My github repo for the app will still reflect my learning, but this demonstration will
				rely on my understanding of React in order to achieve the same working model. I have a limited number of apps I can host on Heroku, so 
				I choose to only host apps for which interactivity is important, and simple pages that I am putting together for local non-profits.</p>
				<p></p>
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
				<div id="gif-div">
					{this.renderGifs()}
					{/*<GifImage url={this.state.images[0]} onClick={this.onImageClick}/>
					<GifImage url={this.state.images[1]} onClick={this.onImageClick}/>
					<GifImage url={this.state.images[2]} onClick={this.onImageClick}/>
					<GifImage url={this.state.images[3]} onClick={this.onImageClick}/>
					<GifImage url={this.state.images[4]} onClick={this.onImageClick}/>
					<GifImage url={this.state.images[5]} onClick={this.onImageClick}/>
					<GifImage url={this.state.images[6]} onClick={this.onImageClick}/>
					<GifImage url={this.state.images[7]} onClick={this.onImageClick}/>
					<GifImage url={this.state.images[8]} onClick={this.onImageClick}/>
					<GifImage url={this.state.images[9]} onClick={this.onImageClick}/>*/}
				</div>
			</div>
		)
	}
}

export default Demo

/*

Metadata can be gathered on everyone

IMSI catchers take signal from phone reaching out to tower, and respond by pretending to be the cell tower
Anyone can get one; police departments are buying these; 

"Shenanigans" was CIA/NSA project to use drones/planes to use IMSI catchers
FBI has specific aviation department for airborne IMSI catchers, used them against protesters at BLM protests in Dallas



img onClick={this.handleImageClick()} 

inside GifImage: 

set parameter to onClick so I can set img onClick={onClick}
*/
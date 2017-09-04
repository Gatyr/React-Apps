import React, {Component} from 'react'
import axios from 'axios'

class GifImages extends Component {
	constructor(props) {
		super(props);

		this.renderGifs = this.renderGifs.bind(this);
		this.retrieveURLs = this.retrieveURLs.bind(this);
	}
	retrieveURLs() {
		let subject = this.props.category;
		let giphyURL = "http://api.giphy.com/v1/gifs/search?q=" + subject + "&api_key=dc6zaTOxFJmzC";
		let rawUrlArray = [];
		let splitUrlArray = [];
		let test;

		/*const haveSubject = new Promise(
			(resolve, reject) => {
				if (subject) {
					const message = "You have a subject, proceeding with process"
					resolve(message);
				} else {
					const reason = "You don't have a subject; ceasing process"
					reject(reason);
				}
			}
		)

		function getURLs() {
			//grab results from Giphy API
			axios.get(giphyURL).then(function(results){
				for (let i=0; i<results.data.data.length; i++) {
					rawUrlArray.push(results.data.data[i].images.fixed_height_small_still.url);
				}
			});
			//logs everything as expected
			console.log(rawUrlArray);
			return Promise.resolve(rawUrlArray);
		}

		const splitURLs = function() {
			//for each index in rawUrlArray
			console.log(rawUrlArray); //logs as expected, but not immediately
			for (let p=0; p<rawUrlArray.length; p++) {
				//go through each index in the string
				console.log(rawUrlArray[p]); //doesn't log anything
				for (let t=0; t<rawUrlArray[p].length; t++) {
					//find the index after .gif
					if ((rawUrlArray[p][t-3] === "g") && (rawUrlArray[p][t-2] === "i") && (rawUrlArray[p][t-1] === "f")) {
						//remove everything after gif
						rawUrlArray[p].splice(t, rawUrlArray[p].length - t);
						//and push the string into a different array
						splitUrlArray.push(rawUrlArray[p]);
					}
				}
			}
			//doesn't log anything
			console.log(splitUrlArray);
			return Promise.resolve(splitUrlArray);
		}

		const puttingItAllTogether = function() {
			haveSubject
				.then(getURLs)
				.then(splitURLs)
				.then(fulfilled => console.log("You did it"))
				.catch(error => console.log(error));
		}

		puttingItAllTogether();*/
		
		axios.get(giphyURL).then(function(results){
				for (let i=0; i<results.data.data.length; i++) {
					rawUrlArray.push(results.data.data[i].images.fixed_height_small_still.url);
				}
				return rawUrlArray
			}).then(function(results1) {
				for (let p=0; p<rawUrlArray.length; p++) {
					let temp = rawUrlArray[p];
					for (let t=0; t<temp.length; t++) {
						//find the index after .gif
						if ((temp[t-3] === "g") && (temp[t-2] === "i") && (temp[t-1] === "f")) {
							//remove everything after gif
							let temp2 = temp.slice(0, t);
							console.log(temp2);
							//and push the string into a different array
							splitUrlArray.push(temp2);
							break
						}
					}
				}
				//console.log(splitUrlArray);
				return splitUrlArray;
			});
	}
	renderGifs() {	
		this.retrieveURLs();
	}
	render() {
		return(
			<div id="gif-div">
				{this.renderGifs()}
			</div>
		)
	}
}

export default GifImages

/*


*/
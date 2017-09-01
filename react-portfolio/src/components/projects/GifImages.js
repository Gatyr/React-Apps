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

		const haveSubject = new Promise(
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

		const getURLs = function() {
			axios.get(giphyURL).then(function(results){
				for (let i=0; i<results.data.data.length; i++) {
					rawUrlArray.push(results.data.data[i].images.fixed_height_small_still.url);
				}
			})
			return Promise.resolve(rawUrlArray);
		}

		const splitURLs = function() {
			console.log(typeof(rawUrlArray)); //object? why the fuck is it an object?
			let temp = [];
			for (let p=0; p<rawUrlArray.length; p++) {
				temp = rawUrlArray[p].split("");
				splitUrlArray.push(temp);
			}
			return Promise.resolve(splitUrlArray);
		}

		const refineURLs = function() {
			console.log(splitUrlArray);

		}

		const puttingItAllTogether = function() {
			haveSubject
				.then(getURLs)
				.then(splitURLs)
				.then(refineURLs)
				.then(fulfilled => console.log("You did it"))
				.catch(error => console.log(error.message));
		}

		puttingItAllTogether();

		
	}
	renderGifs() {
		this.retrieveURLs();
	}
	render() {
		return(
			<div id="gif-div">
				{this.renderGifs()}
				<img src="https://media3.giphy.com/media/yEXPAGIytvqNy/100_s.gif" alt="" />
			</div>
		)
	}
}

export default GifImages

/*
Maybe: 

set method to get img urls, and another to render them


create promise

const doIHaveUrls
	resolve/reject => {
		if (data) {
			const URLarray = 
			resolve URLarray;
		} else {
			const reason = new Error("blah");
		}
	}
const doSomethingWithUrls = function(array) {
	const blahhdfsd = array.map(item, i) {
		console.log("img src='" + array[i] + "' alt=''");
	}
}

const URLrunner = function() {
	doIHaveUrls
		.then(dosomethingwithurls)
		.then(fulfilled => console.log(fullfilled))
		.catch(error => console.log(error.message));
}

		// const trimURLs = function() {
		// 	let newArray = [];
		// 	for (let i=0; i<rawUrlArray.length; i++) {
		// 		let gifUrl = rawUrlArray[i];
		// 		let splitURL = gifUrl.split("");
		// 		for (let p=0; p<splitURL.length; p++) {
		// 		 	if ((splitURL[p-3] === "g") && (splitURL[p-2] === "i") && (splitURL[p-1] === "f")) {
		// 		 		splitURL.splice(p, splitURL.length - p);
		// 		 		gifUrl = splitURL.join("");
				 		
		// 		 		newArray.push(gifUrl);
		// 		 	}
		// 		}
		// 	}

		// 	return Promise.resolve(console.log(newArray));
		// }
*/

/*
		const willIHaveURLs = new Promise(
			(resolve, reject) => {
				if (URLset) { //URLset here is a boolean to test whether or not the axios get retrieved anything
					const URLs = results.data.data //set new const equal to array of urls
					resolve(URLs); 
				} else {
					const reason = new Error('no URLs to work with');
					reject(reason);
				}
			}
		)

		const trimURLs = function(array) {
		*/	

		/*
		let test = axios.get(giphyURL).then(function(results) {
			if (results.data.data[0]) {
				imgUrls = results.data.data.map(function(item, i) {
					let gifUrl = item.images.fixed_height_small_still.url;
					let urlSplit = gifUrl.split("");
					for (let p=0; p<urlSplit.length; p++) {
						if ((urlSplit[p-3] === "g") && (urlSplit[p-2] === "i") && (urlSplit[p-1] === "f")) {
							urlSplit.splice(p, urlSplit.length - p);
							gifUrl = urlSplit.join("");
							return gifUrl
						}
					}
					return imgUrls;
				})
			}
		})
		console.log(test);*/
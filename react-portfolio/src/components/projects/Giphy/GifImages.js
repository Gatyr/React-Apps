import React, {Component} from 'react'
import axios from 'axios'

class GifImages extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: []
		}
		this.renderGifs = this.renderGifs.bind(this);
		this.retrieveURLs = this.retrieveURLs.bind(this);
	}
	retrieveURLs() {
		let subject = this.props.category;
		let giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + subject + "&api_key=dc6zaTOxFJmzC";
		let rawUrlArray = [];
		let splitUrlArray = [];
		
		let test = axios.get(giphyURL).then(function(results){
			//console.log(results);
			for (let i=0; i<results.data.data.length-15; i++) {
				rawUrlArray.push(results.data.data[i].images.fixed_height.url);
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
						//and push the string into a different array
						splitUrlArray.push(temp2);
						break
					}
				}
			}
			return splitUrlArray;
		});
		return test
	}
	renderGifs() {
		this.retrieveURLs().then(results => {
			this.setState({ images: results })
		}, this);
		return this.state.images.map(function(url, index) {
			return (
				<div className="gif-holder" key={index} id={index}>
					<img src={url} alt="" />
				</div>
			)
		})
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
  $ yarn install
remote:        $ git add yarn.lock
remote:        $ git commit -m "Updated Yarn lockfile"
remote:        $ git push heroku master


*/
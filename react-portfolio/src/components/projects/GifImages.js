import React, {Component} from 'react'
import axios from 'axios'

class GifImages extends Component {
	constructor(props) {
		super(props);

		this.renderGifs = this.renderGifs.bind(this);

	}	
	renderGifs() {
		let subject = this.props.category;
		let giphyURL = "http://api.giphy.com/v1/gifs/search?q=" + subject + "&api_key=dc6zaTOxFJmzC";
		
		axios.get(giphyURL).then(function(results) {
			console.log("axios results: ", results);
		})
	}
	render() {
		return(
			<div>
				<p>{this.props.category}</p>
				<p>{this.renderGifs()}</p>
			</div>
		)
	}
}

export default GifImages
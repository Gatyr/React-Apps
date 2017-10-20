import React, {Component} from 'react'

class GifImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imageStill: this.props.url[0],
			imageMoving: this.props.url[1],
			moving: false
		}
		this.handleImageClick = this.handleImageClick.bind(this);
	}
	handleImageClick() {
		if (this.state.moving === false) {
			this.setState({moving: true});
		}
		else {
			this.setState({moving: false});
		}
		console.log("image was clicked");
	}
	render() {
		let image = null;
		if (this.state.moving === false) {
			image = <img src={this.state.imageStill} onClick={this.handleImageClick} alt=""  />
		} else {
			image = <img src={this.state.imageMoving} alt="" onClick={this.handleImageClick} />
		}
		return(
			<div>
				{image}
			</div>	
		)
	}
}

export default GifImage
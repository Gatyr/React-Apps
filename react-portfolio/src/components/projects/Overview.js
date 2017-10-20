import React, {Component} from 'react'
import bigObject from './projectsInfo'

class Overview extends Component {
	constructor(props) {
		super(props)
		this.state = {
			projectName: this.props.projectName,
			info: bigObject[this.props.projectName].overview
		}
		this.renderImages = this.renderImages.bind(this);
		this.renderText = this.renderText.bind(this);
		console.log(this.state.info.text);
	}
	renderImages() {
		let placeholder = this.state.info.techs
		return placeholder.map((key, index) => {
			return (
				<li key={index}><img src={"/logos/" + placeholder[index]} alt="" /></li>
			)
		});
	}
	renderText() {
		let placeholder = this.state.info.text 
		return Object.keys(placeholder).map((key, index) => {
			return (
				<li key={index}>{placeholder[key]}</li>
			)
		});
	}
	render() {
		return (
			<div className="container" id="lsit">
				<div className="col-md-3" id="tech-used">
					<h4>What I used:</h4>
					<ul>
						{this.renderImages()}
					</ul>
				</div>
				<div className="col-md-6" id="project-picture">
					<iframe title={this.state.info.name} src={this.state.info.video} width="640" height="359" frameBorder="0" allowFullScreen></iframe>
				</div>
				<div className="col-md-3" id="what-I-learned">
					<h4>A few thoughts:</h4>
					<ul>
						{this.renderText()}			
					</ul>
				</div>
			</div>
		)
	}
}

export default Overview

//<iframe title='Giphy' src='https://player.vimeo.com/video/233887822' width='640' height='290' frameBorder='0'  allowFullScreen></iframe>
import React, {Component} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

import picDesc from '../../utils/projects'

class Mongo extends Component {
	constructor(props) {
		super(props);
		this.state = {src: 1}

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event) {
		this.setState({src: event.target.value})
	}
	render() {
		return (
			<div className="component-holder" id="project-summary">
				<a href="https://github.com/Gatyr/MongoWebScraper"><h1>Mongo Web Scraper</h1></a>
				<div className="container" id="lsit">
					<div className="col-md-3" id="tech-used">
						<h4>What I used:</h4>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>Bootstrap</li>
							<li>JavaScript</li>
							<li>jQuery</li>
							<li>Node.js</li>
							<li>Express</li>
							<li>Mongoose</li>
							<li>Handlebars Web Template System</li>
						</ul>
					</div>
					<div className="col-md-6" id="project-picture">
						<div className="img-link-btns">
							<button className="btn btn-link" onClick={this.handleClick} value="1">1</button>
							<button className="btn btn-link" onClick={this.handleClick} value="2">2</button>
							<button className="btn btn-link" onClick={this.handleClick} value="3">3</button>
							<button className="btn btn-link" onClick={this.handleClick} value="4">4</button>
							<button className="btn btn-link" onClick={this.handleClick} value="5">5</button>
							<button className="btn btn-link" onClick={this.handleClick} value="6">6</button>
						</div>
						<img id="myImg" src={"/project-images/MongoScraper/MongoScraper"+ this.state.src + ".png"} alt="" width="500" height="266"/>
						<p>{picDesc.mongo[this.state.src - 1]}</p>
					</div>
					<div className="col-md-3" id="what-I-learned">
						<h4>What I learned:</h4>
						<ul>
							<li>How to use the Express, Mongoose, body-parser, Request, and Cheerio Node packed modules</li>
							<li>How to scrape webpages for specific content</li>
							<li>Mongoose database initialization, routing, and manipulation</li>
							<li>Configuring Mongoose schema models</li>
							<li>Integrating the backend with the frontend to present user-manipulated data</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Mongo
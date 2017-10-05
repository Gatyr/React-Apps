import React, {Component} from 'react'
//import picDesc from '../../../utils/projects'

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
							<li><img src="/logos/HTML5.png" alt="" /></li>
							<li><img src="/logos/CSS.png" alt=""/></li>
							<li><img src="/logos/javascript.png" alt=""/></li>
							<li><img src="/logos/jquery.gif" alt=""/></li>
							<li><img src="/logos/mongoose.png" alt=""/></li>
							<li><img src="/logos/expressjs.png" alt=""/></li>
							<li><img src="/logos/mongodb.png" alt=""/></li>
							<li><img src="/logos/bootstrap.png" alt=""/></li>		
						</ul>
					</div>
					<div className="col-md-6" id="project-picture">
						<iframe title="MongoWebScraper" src="https://player.vimeo.com/video/233887906" width="640" height="299" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="https://vimeo.com/233887906">web-scraper</a> from <a href="https://vimeo.com/user791506">Gatyr</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
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
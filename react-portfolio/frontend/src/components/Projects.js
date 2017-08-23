import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

import Train from './projects/Train'
import Giphy from './projects/Giphy'
import MySQL from './projects/MySQL'
import Mongo from './projects/Mongo'
import Routing from './projects/Routing'
import MERN from './projects/MERN'
import NYTsearch from './projects/NYTsearch'

var ProjectObjects = require("../utils/projects.js");



class Projects extends Component {
	render() {
		return (
			<div id="project-div">
				<nav className="navbar navbar-light" id="projects-nav">
					<Link to="/projects/giphy"><button className="btn btn-link">Giphy</button></Link>
					<Link to="/projects/train"><button className="btn btn-link">Train Scheduler</button></Link>
					<Link to="/projects/mysql"><button className="btn btn-link">MySQL Storefront</button></Link>
					<Link to="/projects/mongo"><button className="btn btn-link">Mongo Web Scraper</button></Link>
					<Link to="/projects/routing"><button className="btn btn-link">React Routing App</button></Link>
					<Link to="/projects/mern"><button className="btn btn-link">Simple MERN App</button></Link>
					<Link to="/projects/nytsearch"><button className="btn btn-link">NYT Search React App</button></Link>
				</nav>
				<div id="project-info">
					.<Route path="/projects/giphy" component={Giphy} />
					.<Route path="/projects/train" component={Train} />
					.<Route path="/projects/mysql" component={MySQL} />
					.<Route path="/projects/mongo" component={Mongo} />
					.<Route path="/projects/routing" component={Routing} />
					.<Route path="/projects/mern" component={MERN} />
					.<Route path="/projects/nytsearch" component={NYTsearch} />
					.
				</div>
			</div>
		)
	}
}

export default Projects
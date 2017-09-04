import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

import Saved from './NYTsaved'
import Search from './NYTsearch'

export class Main extends Component {
	render() {
		return ( 
			<div className="main-container">
				<div className="container">
				  	{/* Navbar */}
				  	<nav className="navbar navbar-default" role="navigation">
						<div className="container-fluid">
					  		<div className="navbar-header">
								<button
							  	type="button"
							  	className="navbar-toggle"
							  	data-toggle="collapse"
							  	data-target=".navbar-ex1-collapse"
								>
							  	<span className="sr-only">Toggle navigation</span>
							  	<span className="icon-bar"></span>
							  	<span className="icon-bar"></span>
							  	<span className="icon-bar"></span>
								</button>
								
						  	</div>

						  	<div className="collapse navbar-collapse navbar-ex1-collapse">
								<ul className="nav navbar-nav navbar-right">

							  		<li><Link to="/projects/nytsearch/search">Search</Link></li>
							  		<li><Link to="/projects/nytsearch/saved">Saved Articles</Link></li>
								</ul>
						  	</div>
						</div>
				  	</nav>

					<div className="jumbotron" id="NYTjumbotron">
						<h2 className="text-center"><strong>(ReactJS) New York Times Article Scrubber</strong></h2>
						<h3 className="text-center">Search for and save articles of interest.</h3>
					</div>

					<Route path="/projects/nytsearch/saved" component={Saved}/>
					<Route path="/projects/nytsearch/search" component={Search}/>

					<footer>
						<hr />
						<p className="pull-right">
						  	<i className="fa fa-github" aria-hidden="true"></i>
						  	Proudly built using React.js
						</p>
				  	</footer>
				</div>
			</div>
		);
	}
};

export default Main

/*

To do: 

switch everything up so that CSS from other component doesnt affect these components

*/
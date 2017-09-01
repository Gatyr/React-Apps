import React, {Component} from 'react'
import helpers from './utils/helpers'

class Saved extends Component {
	constructor() {
		super();
		this.state = {
			savedArticles: ""
		}
	}
	// When this component mounts, get all saved articles from our db
	componentDidMount() { 
		helpers.getSaved().then(function(articleData) { //accesses the getSaved function from helpers
			this.setState({ savedArticles: articleData.data }); //sets state for component as data from getSaved method
			console.log("saved results", articleData.data); //logs in console
		}.bind(this)); //ensure 'this' works in the callback
	}

	handleClick(item) {
		console.log("CLICKED");
		console.log(item);
		helpers.deleteSaved(item.title, item.date, item.url).then(function() {

			helpers.getSaved().then(function(articleData) { //grab article data for saved articles
				this.setState({ savedArticles: articleData.data }); //set state for saved articles component as returned data 
				console.log("saved results", articleData.data); //log in console
			}.bind(this)); //ensure this works in callback
		}.bind(this));
	}

	renderEmpty() { 
		return (
			<li className="list-group-item">
				<h3>
				<span>
					<em>Save your first article...</em>
				</span>
				</h3>
			</li>
		);
	}


	renderArticles() {
		return this.state.savedArticles.map(function(article, index) { //map here converts an array into another array with modified items	
		 	return (
				<div key={index}>
					<li className="list-group-item">
						<h3>
							<span>
								<em>{article.title}</em>
							</span>
							<span className="btn-group pull-right">
								<a href={article.url} rel="noopener noreferrer" target="_blank">
									<button className="btn btn-default ">View Article</button>
								</a>
								<button className="btn btn-primary" onClick={() => this.handleClick(article)}>Delete</button>
							</span>
						</h3>
						<p>Date Published: {article.date}</p>
					</li>
				</div>
			);
		}.bind(this));
	}


	renderContainer() {
		return (
			<div className="main-container">
				<div className="row">
					<div className="col-lg-12">
						<div className="panel panel-primary">
							<div className="panel-heading">
								<h1 className="panel-title">
									<strong>
									<i className="fa fa-download" aria-hidden="true"></i> Saved Articles</strong>
								</h1>
							</div>
							<div className="panel-body">
								<ul className="list-group">
								{this.renderArticles()}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	render() {

		if (!this.state.savedArticles) {
			return this.renderEmpty();
		}
		
		return this.renderContainer();
	}
}

export default Saved
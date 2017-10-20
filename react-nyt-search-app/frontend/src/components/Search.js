import React, {Component} from 'react'
import Query from './Search/Query'
import Results from './Search/Results'
import helpers from '../utils/helpers'

class Search extends Component {
	constructor() {
		super();
		this.state = {
			results: {}
		}
		this.setQuery = this.setQuery.bind(this);
	}
	setQuery(newQuery, newStart, newEnd) {
		helpers.runQuery(newQuery, newStart, newEnd).then(function(data) {
			this.setState({ results: { docs: data.docs } });
		}.bind(this));
	}
	render () {
		console.log("Render Results", this.state.results);
		return (
			<div className="main-container">
				<Query updateSearch={this.setQuery} />
				<Results results={this.state.results} />
			</div>
		);
	}
}

export default Search

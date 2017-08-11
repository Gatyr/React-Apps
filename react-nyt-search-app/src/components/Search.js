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

	// This function will be passed down into child components so they can change the "parent"
	// i.e we will pass this method to the query component that way it can change the main component
	// to perform a new search
	setQuery(newQuery, newStart, newEnd) {
		helpers.runQuery(newQuery, newStart, newEnd).then(function(data) {
			this.setState({ results: { docs: data.docs } });
		}.bind(this));
	}

	// Render the component. Note how we deploy both the Query and the Results Components
	render () {
		console.log("Render Results", this.state.results);
		return (
			<div className="main-container">

				{/* Note how we pass the setQuery function to enable Query to perform searches */}
				<Query updateSearch={this.setQuery} />
				{/* Note how we pass in the results into this component */}
				<Results results={this.state.results} />
			</div>
		);
	}
}

export default Search

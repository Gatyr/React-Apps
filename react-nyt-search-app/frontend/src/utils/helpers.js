import axios from 'axios'

const APIKey = "cf721e20182446ef91de1e346b2c8467"

var helpers = {

	runQuery(term, start, end) {


		var formattedTerm = term.trim();
		var formattedStart = start.trim() + "0101";
		var formattedEnd = end.trim() + "1231";


		console.log("Query Run");


		return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
		params: {
			"api-key": APIKey,
			"q": formattedTerm,
			"begin_date": formattedStart,
			"end_date": formattedEnd
		}
		})
		.then(function(results) {
			console.log("Axios Results", results.data.response);
			return results.data.response;
		});
	},
	
	getSaved() {
		return axios.get("http://localhost:4200/api/saved")
		.then(function(results) {
			console.log("axios results", results);
			return results;
		});
	},

	postSaved(title, date, url) {
		var newArticle = { title: title, date: date, url: url };
		return axios.post("http://localhost:4200/api/saved", newArticle)
			.then(function(response) {
			console.log("axios results", response.data._id);
			return response.data._id;
			});
			
	},

	deleteSaved(title, date, url) {
		return axios.delete("http://localhost:4200/api/saved", {
			params: {
			"title": title,
			"date": date,
			"url": url
			}
		})
		.then(function(results) {
			console.log("axios results", results);
			return results;
		});
	}
}

export default helpers;
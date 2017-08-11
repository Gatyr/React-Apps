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
	// This will return any saved articles from our database
	getSaved() {
		return axios.get("/api/saved")
		.then(function(results) {
			console.log("axios results", results);
			return results;
		});
	},
	// This will save new articles to our database
	postSaved(title, date, url) {
		var newArticle = { title: title, date: date, url: url };
		return axios.post("/api/saved", newArticle)
			.then(function(response) {
			console.log("axios results", response.data._id);
			return response.data._id;
			});
	},
	// This will remove saved articles from our database
	deleteSaved(title, data, url) {
		return axios.delete("/api/saved", {
			params: {
			"title": title,
			"data": data,
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
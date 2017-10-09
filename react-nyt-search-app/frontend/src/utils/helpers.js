import axios from 'axios'
import 'whatwg-fetch'
const APIKey = "cf721e20182446ef91de1e346b2c8467"
var myHeaders = new Headers();

myHeaders.append('Content-Type', 'application/json');

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
			console.log("Results", results.data.response);
			return results.data.response;
		});
	},
	
	getSaved() {
		// return axios.get("http://localhost:4200/api/saved")
		// .then(function(results) {
		// 	console.log("axios results", results);
		// 	return results;
		// });
		return fetch("http://localhost:4200/api/saved")
		.then(response => response.json()).then(function(results) {
			console.log(results);
			return results;
		});
	},

	postSaved(title, date, url) {
		var newArticle = { title: title, date: date, url: url };
		// return axios.post("http://localhost:4200/api/saved", newArticle)
		// 	.then(function(response) {
		// 	console.log("axios results", response.data._id);
		// 	return response.data._id;
		// 	});
		return fetch("http://localhost:4200/api/saved", {
			method: 'POST',
			body: JSON.stringify(newArticle),
			mode: 'cors',
			headers: myHeaders,
			cache: 'default'
		}).then(function(response) {
			console.log(response)
			return response.json();
		}).then(function(data){
			console.log(data);
		});						
	},

	deleteSaved(url) {
		// return axios.delete("http://localhost:4200/api/saved", {
		// 	params: {
		// 		"url": url
		// 	}
		// })
		// .then(function(results) {
		// 	console.log("axios results", results);
		// 	return results;
		// });
		return fetch("http://localhost:4200/api/saved", {
			method: 'DELETE',
			body: JSON.stringify({url: url}),
			mode: 'cors',
			headers: myHeaders,
			cache: 'default'
		}).then(function(response) {
			return response;
		}).then(function(data){
			console.log(data);
			return data;
		});	
	}
}

export default helpers;

// return fetch("https://api.mlab.com/api/1/databases/daniels-first-database/collections/nytcollection?apiKey=QG-Th511RpIQm7aeuFS5CSr-qHP6WJRq", {
// 			method: 'POST',
// 			body: newArticle
// 		});			
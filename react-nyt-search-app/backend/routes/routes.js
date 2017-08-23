// need one for post, get, delete to /api/saved
var express = require("express");
var app = express();
var Router = express.Router();

var Article = require("../models/model");


Router.route('/api/saved').get(function(req, res) {
	Article.find(function(err, doc) {
		if (err) {console.log("app.get error: " + err);}
		else {res.send(doc);}
	});
});

Router.route('/api/saved').post(function(req, res) {
	var newArticle = new Article(req.body);
	console.log("req.body for new saved article: " + req.body);
	
	newArticle.save().then(newArticle => {
		res.status(200).json({newArticle: 'Article added successfully'});
	}).catch(err => {res.status(400).send("unable to save to database");});
});

Router.route('/api/saved').get(function(req, res) {
	var url = req.param("url");
	Article.find({url:url}).remove().exec(function(err){
		if (err) {console.log("delete error: " + err);}
		else {res.send("Deleted");}
	});
});

module.exports = Router;
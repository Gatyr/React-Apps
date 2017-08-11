var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var logger = require("morgan");

var Article = require("./server/model");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(express.static(__dirname + "../public"));
app.use(bodyParser.json({type: "application/vnd.api+json"}));

var db = process.env.MONGODB_URI || "mongodb://localhost/mongoPBN";

mongoose.connect(db, function(error) {
	if (error) {console.log(error);}
	else {console.log("mongoose connection successful")}
});


app.get("/api/saved", function(req, res) {
	Article.find({}).exec(function(err, doc) {
		if (err) {console.log(err);}
		else {res.json(doc);}
	});
});

app.post("/api/saved", function(req, res) {
	var newArticle = new Article(req.body);
	console.log(req.body);

	Article.save(req.body, function(err, doc) {
		if (err) {console.log(err);}
		else {}
	});
});

app.delete("/api/saved", function(req, res) {
	var url = req.param("url");
	Article.find({url: url}).remove().exec(function(err, data){
		if (err) {console.log(err);}
		else {res.send("Deleted");}
	});
});

//any non API get routes will be directed to our react app and handled by react router
app.get("*", function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, function() {
	console.log("Listening on port: " + PORT);
});
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var PORT = 4200;
var Article = require("./models/model");
mongoose.Promise = require("bluebird");
mongoose.connect('mongodb://localhost/reactStuff')
	.then(() => {
		console.log('Mongoose connection started');
	}).catch(err => {
		console.error("App starting error: ", err.stack);
		process.exit(1);
	});


app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get("/api/saved", function(req, res) {

  Article.find({})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});


app.post("/api/saved", function(req, res) {
  var newArticle = new Article(req.body);

  console.log(req.body);

  newArticle.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});


app.delete("/api/saved/", function(req, res) {

  var url = req.param("url");

  Article.find({ url: url }).remove().exec(function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Deleted");
    }
  });
});

app.listen(PORT, function() {
	console.log('Server is now running on PORT: ', PORT);
});

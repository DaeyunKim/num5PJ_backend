var express = require('express')
var app = express()
var router = express.Router();
var path = require('path')
var db = require(path.resolve() + '/utils/db' );
var test = require('./test/index')

// url routing
router.get('/', function(req,res) {
	var collection = db.get().collection('comments');
	console.log('index')
	/*
	collection.insert({name: 'taco', tasty: true}, function(err, result) {
		collection.find({name: 'taco'}).toArray(function(err, docs) {
		  console.log(docs[0])
		  // db.close()
		})
	})*/
});


// router.use('/movie', movie)
router.use('/test',test)

module.exports = router;

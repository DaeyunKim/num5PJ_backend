var express = require('express')
var app = express()
var router = express.Router();
var path = require('path')
var db = require(path.resolve() + '/utils/db' );
var location = require('./location/index')
//http://mongodb.github.io/node-mongodb-native/3.0/quick-start/quick-start/

router.post('/', function(req,res) {
	console.log('called api: /jazz function: post(insert)')
	let collection = db.get().collection('jazz');

	let jazzData = req.body;
	collection.insertOne(jazzData, function(err,r) {
		console.log(r.insertedCount);
		if( r.insertedCount > 0 ) {
			res.status(200).send({status : "success"});
		} else {
			throw new Error('insert data zero');
		}
	}) 
		
});


router.get('/', function(req,res) {
    console.log('called api: /jazz function: get(select)')
	
	let collection = db.get().collection('jazz');
	let name = req.params.name;	
	
	collection.find({}).toArray(function(err, docs) {

		res.status(200).send({result : docs});

	})

});


router.use('/location', location)

module.exports = router;

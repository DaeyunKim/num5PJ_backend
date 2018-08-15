var express = require('express')
var app = express()
var router = express.Router();
var path = require('path')
var sample = require('./sample/index')
//http://mongodb.github.io/node-mongodb-native/3.0/quick-start/quick-start/


router.get('/', function(req,res) {
    console.log('called api  /test ')
	
	// json 객체 
	console.log(' json 객체 보여주기 : %j', {name: 'test' } );


});

router.use('/sample', sample)

module.exports = router;

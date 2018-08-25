var express = require('express')
var app = express()
var router = express.Router();
var path = require('path')
var jazz = require('./jazz/index')

/*
// url routing
router.get('/', function(req,res) {
	throw new Error('');
});*/

router.use('/jazz',jazz)

module.exports = router;

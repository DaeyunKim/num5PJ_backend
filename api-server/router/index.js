var express = require('express')
var app = express()
var router = express.Router();
var path = require('path')
var jazz = require('./jazz/index')


router.use('/jazz',jazz)

module.exports = router;

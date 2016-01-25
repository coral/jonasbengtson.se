'use strict'
/**
 * Module dependencies.
 */

var ua = require("universal-analytics");
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var server = null;

var config = require('../config.json');

exports.start = function() {

    app.use(ua.middleware(config.analytics.ga, { cookieName: '_ga' }));
    app.use(bodyParser.json());
    app.use('/', express.static("public"));
    app.use('/bower_components', express.static("bower_components"));


    server = require('http').createServer(app);
    server.listen(config.server.port, config.server.hostname);

    console.log("It's up and running at port " + config.server.port);


}
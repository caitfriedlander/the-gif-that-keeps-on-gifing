var request = require('request');

var passport = require('passport');

var welcome = function(req, res, next) {
  res.render('pages/welcome', { user: req.user });
};

var survey = function(req, res, next) {
	res.render('pages/survey', { user: req.user });
};

var showResults = function(req, res, next) {
	res.render('pages/results', { user: req.user });
};

var about = function(req, res, next) {
	res.render('pages/about', { user: req.user });
};

module.exports = {
  welcome: welcome,
	survey: survey,
	showResults: showResults,
	about: about
};

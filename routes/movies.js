var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

//Models
var Movie = require('../models/Movie.js');

var db = mongoose.connection;


/* GET movies listing */
router.get('/', function (req, res) {
    Movie.find().exec(function(err, movies) {
      if (err) res.status(500).send(err);
      else res.status(200).json(movies);
    });
});

/* GET single movie by Id */
router.get('/:id', function (req, res) {
    Movie.findById(req.params.id, function (err, movieinfo) {
      if (err) res.status(500).send(err);
      else res.status(200).json(movieinfo);
    });
});

module.exports = router;

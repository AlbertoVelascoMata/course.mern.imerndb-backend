var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'IMernDB backend',
        frontend_uri: 'https://albertovelascomata.github.io/course.mern.imerndb-frontend/'
    });
});

module.exports = router;

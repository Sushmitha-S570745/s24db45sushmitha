var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('yogamats', { title: 'Search Results for class Yogamats' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('yogamats', { title: 'Search Results for class Yogamats' });
});

module.exports = router;
var express = require('express');
const yogamat_controlers= require('../controllers/yogamat');
var router = express.Router();
/* GET costumes */
router.get('/', yogamat_controlers.yogamat_view_all_Page );
// GET request for one costume.
router.get('/yogamat/:id', yogamat_controlers.yogamat_detail)

module.exports = router;


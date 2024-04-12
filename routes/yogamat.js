var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('yogamat', { title: 'Search Results for Class yogamat' });
});

module.exports = router;
var express = require('express');
const yogamat_controllers= require('../controllers/yogamat');
var router = express.Router();
/* GET yogamats */
router.get('/', yogamat_controllers.yogamat_view_all_Page );
router.get('/yogamat/:id', yogamat_controllers.yogamat_detail);

/* GET detail yogamat page */
router.get('/detail', yogamat_controllers.yogamat_view_one_Page);
/* GET create yogamat page */
router.get('/create', yogamat_controllers.yogamat_create_Page);
/* GET create update page */
router.get('/update', yogamat_controllers.yogamat_update_Page);
/* GET delete yogamat page */
router.get('/delete', yogamat_controllers.yogamat_delete_Page);

module.exports = router;
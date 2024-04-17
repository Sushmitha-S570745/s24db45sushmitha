var express = require('express');
var router = express.Router();
var passport=require('passport');
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
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  res.redirect("/login");}
/* GET detail yogamat page */
router.get('/detail', secured,yogamat_controllers.yogamat_view_one_Page);
/* GET create yogamat page */
router.get('/create', yogamat_controllers.yogamat_create_Page);
/* GET create update page */
router.get('/update', secured,yogamat_controllers.yogamat_update_Page);
// A little function to check if we have an authorized user and continue on or
// redirect to login.

/* GET delete yogamat page */
router.get('/delete', secured,yogamat_controllers.yogamat_delete_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
  });
module.exports = router;
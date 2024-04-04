var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var yogamat_controller = require('../controllers/yogamat');

router.get('/', api_controller.api);

router.post('/yogamat', yogamat_controller.yogamat_create_post);

router.delete('/yogamat/:id', yogamat_controller.yogamat_delete);

router.put('/yogamat/:id',yogamat_controller.yogamat_update_put);

router.get('/yogamat/:id', yogamat_controller.yogamat_detail);

router.get('/yogamat', yogamat_controller.yogamat_list);
module.exports = router;
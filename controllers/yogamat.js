var yogamat = require('../model/yogamat');

exports.yogamat_list = function(req, res) {
res.send('NOT IMPLEMENTED: yogamat list');
};

exports.yogamat_detail = function(req, res) {
res.send('NOT IMPLEMENTED: yogamat detail: ' + req.params.id);
};

exports.yogamat_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: yogamat create POST');
};

exports.yogamat_delete = function(req, res) {
res.send('NOT IMPLEMENTED: yogamat delete DELETE ' + req.params.id);
};

exports.yogamat_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: yogamat update PUT' + req.params.id);
};
// List of all Costumes
exports.yogamat_list = async function(req, res) {
    try{
    theyogamat = await yogamat.find();
    res.send(theyogamat);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // VIEWS
   
    exports.yogamat_view_all_Page = async function(req, res) {
    try{
    theyogamat = await yogamat.find();
    res.render('yogamat', { title: 'Yogamat Search Results', results: theyogamat });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
 
    
    
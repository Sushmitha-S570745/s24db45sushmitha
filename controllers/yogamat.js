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

    exports.yogamat_create_post = async function(req, res) {
    console.log(req.body)
    let document = new yogamat();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.material = req.body.material;
    document.color = req.body.color;
    document.thickness = req.body.thickness;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// for a specific Costume.
exports.yogamat_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await yogamat.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    

exports.yogamat_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await yogamat.findById( req.params.id)
// Do updates of properties
if(req.body.material)
toUpdate.material = req.body.material;
if(req.body.thickness) toUpdate.thickness = req.body.thickness;
if(req.body.color) toUpdate.color = req.body.color;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};


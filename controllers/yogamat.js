var yogamat = require('../model/yogamat');
// List of all yogamats
exports.yogamat_list = function(req, res) {
res.send('NOT IMPLEMENTED: yogamat list');
};
// for a specific yogamat.
exports.yogamat_detail = function(req, res) {
res.send('NOT IMPLEMENTED: yogamat detail: ' + req.params.id);
};
// Handle yogamat create on POST.
exports.yogamat_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: yogamat create POST');
};
// Handle yogamat delete from on DELETE.
exports.yogamat_delete = function(req, res) {
res.send('NOT IMPLEMENTED: yogamat delete DELETE ' + req.params.id);
};
// Handle yogamat update form on PUT.
exports.yogamat_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: yogamat update PUT' + req.params.id);
};
// List of all yogamats
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
// Handle a show all view
exports.yogamat_view_all_Page = async function(req, res) {
    try{
    theyogamat = await yogamat.find();
    res.render('yogamat', { title: 'yogamat Search Results', results: theyogamat });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    //Handle yogamat create on POST.
exports.yogamat_create_post = async function(req, res) {
console.log(req.body)
let document = new yogamat();
document.material = req.body.material;
document.thickness = req.body.thickness;
document.color = req.body.color;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// for a specific yogamat.
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
// Handle yogamat update form on PUT.
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
// Handle yogamat delete on DELETE.
exports.yogamat_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await yogamat.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};


// Handle yogamat delete on DELETE.
exports.yogamat_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await yogamat.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

    

    // Handle a show one view with id specified by query
exports.yogamat_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await yogamat.findById( req.query.id)
    res.render('yogamatdetail',
    { title: 'yogamat Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for creating a yogamat.
// No body, no in path parameter, no query.
// Does not need to be async
exports.yogamat_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('yogamatcreate', { title: 'yogamat Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for updating a yogamat.
    // query provides the id
    exports.yogamat_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await yogamat.findById(req.query.id)
    res.render('yogamatupdate', { title: 'yogamat Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    }
// Handle a delete one view with id from query
exports.yogamat_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    let result = await yogamat.findById(req.query.id)
    res.render('yogamatdelete', { title: 'yogamat Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle a show one view with id specified by query
exports.yogamat_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await yogamat.findById( req.query.id)
res.render('yogamatdetail',
{ title: 'yogamat Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};


    
       
    
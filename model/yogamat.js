const mongoose = require("mongoose")
const yogamatSchema = new mongoose.Schema({
material: String,
color: String,
thickness: String
});
module.exports = mongoose.model("yogamat",yogamatSchema)
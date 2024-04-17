const mongoose = require("mongoose");

const yogamatSchema = new mongoose.Schema({
    material: String,
    color: {
        type: String,
        minlength: 0,
        maxlength: 10
    },
    thickness: 
        {
            type:String,
            minlength:[0],
            maxlength:[20]
          },
    
});

module.exports = mongoose.model("yogamat", yogamatSchema);

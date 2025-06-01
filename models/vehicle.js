const { Schema, model } = require("mongoose");;

//schema for the the vehicles stored in the database
var vehicleSchema = new Schema({
    capacity: {
        type: Number,
        required: true
    },
    range: {
        type: Number,
        required: true
    },
    fuel: {
        type: String,
        required: true
    }
    //Notes: 
    // It is good idea to extend the schema with availibility
    // If we add plug-in hybrid cars, it is useful to differentiate between batterry and gasoline range

});

module.exports = new model("Vehicles", vehicleSchema);





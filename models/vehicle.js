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
    //It is good idea to extend the schema with availibility
});

module.exports = new model("Vehicles", vehicleSchema);





const mongoose = require('mongoose'),
    DBURL = process.env.DBURL || 'mongodb://localhost/taxiDb'; //|| 'mongodb://localhost/legzotorna'


mongoose.set("debug", false);

//Connceting to the database
mongoose.connect(DBURL, {
    serverSelectionTimeoutMS: 5000
})
.then(() => {
    console.log("Connected to DB");
})
.catch(err => {
    console.log(err);
});

    
//exporting module
module.exports.Vehicles = require('./vehicle');
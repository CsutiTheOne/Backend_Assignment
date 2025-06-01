const   {Router} = require("express"),
        router = Router();

//We need to access the DB from here
const   DB = require("../models");


router.route("/")
    //LIST ALL VEHICLES
    .get((req, res) => {    
        DB.Vehicles.find()
        .then(allVehicles => {
            res.status(200).json(allVehicles);
        })
        .catch(err => {
            res.send(err);
        });
        
    })
    //ADD NEW VEHICLE TO THE FLEET
    .post((req, res) => {
        
        DB.Vehicles.create(req.body)
        .then(created => {
            res.status(201).json(created);
        })
        .catch(err => {
            res.send(err);
        });
    });

//With singular vehicle
router.route("/:vehicle_id")
    //SHOW ONE VEHICLE
    .get((req, res) => {        
        DB.Vehicles.findById(req.params.vehicle_id)
        .then(found => {
            res.status(200).json(found);
        })
        .catch(err => {
            res.send(err);
        });
    })
    //UPDATE VEHICLE
    .patch((req, res) => {
        DB.Vehicles.findByIdAndUpdate(req.params.vehicle_id, req.body, {returnDocument:"after"})
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(err => {
            res.send(err);
        });
    })
    //DELETE A VEHICLE  
    .delete((req, res) => {
        DB.Vehicles.findByIdAndDelete(req.params.vehicle_id)
        .then(() => {
            res.status(200).send("Deleted succesfully!");
        })
        .catch(err => {
            res.send(err);
        })
    });




module.exports = router;
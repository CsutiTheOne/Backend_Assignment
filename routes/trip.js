const   {Router} = require("express"),
        router = Router();

//We need to access the DB from here
const   DB = require("../models");

//Vehicle class to make calculation more conscise
const {Vehicle} = require("../utils");


//LIST ALL POSSIBLE TRIPS
//parameters:
//  number of passangers
//  distance
//returns:
//  all possible trips with
//  possible vehicle, travel fee, refueling fee, suspected profit
router.get("/", (req, res) => {
    DB.Vehicles.find()
    .then(allVehicles => {
        let dist = Number(req.query.distance);
        let passangers = Number(req.query.passangers);

        let response = [];

        for(let i = 0; i < allVehicles.length; i++) {
            let vObj = allVehicles[i];
            let v = new Vehicle(vObj.capacity, vObj.range, vObj.fuel);
            
            if(!v.canCover(dist) || passangers > v.capacity) continue; //exclude vehicles with insufficient range & seats

            //for each vehicle list: travelTime, travelFee, fuelCost and profit (=travelFee-fuelCost)
            let travelTime = v.calcTravelTime(dist);
            let fee = v.calcTravelFee(dist);
            let fuelCost = v.calcFuelCost(dist);
            let profit = fee - fuelCost;

            response.push({
                vehicleId: vObj._id,
                travelTime,
                fee,
                fuelCost,
                profit
            });
        }
        res.json(response);
    })
    .catch(err => {
        res.send(err.message);
    });
});

module.exports = router;
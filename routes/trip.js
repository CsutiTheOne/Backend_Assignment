const   {Router} = require("express"),
        router = Router();

//We need to access the DB from here
const   DB = require("../models");

//LIST
//parameters:
//  number of passangers
//  distance
//returns:
//  all possible trips with
//  possible vehicle, travel fee, refueling fee, suspected profit
router.get("/", (req, res) => {
    res.send("Hello from trips");
});

module.exports = router;
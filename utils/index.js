//This class is an overkill at the moment
//as this backend is very lightweight with little functionaliy
//BUT later it should make maintainability easier vehicles and/or trips
//are handled in classes

//ENUM FOR FUEL TYPES
const FUELS = {
    Gasoline: "gasoline",
    MildHybrid: "mild hybrid",
    PureElectric: "pure electric"
}
exports.FUELS = FUELS;

class Vehicle {
    constructor(capacity, range, fuel) {
        this.capacity = capacity;
        this.range = range;
        this.fuel = fuel;
    }

    //Calculates the time it takes to travel the given distance
    //  @param: distance: number, distance in km
    //  @return: number, travel time in minutes
    calcTravelTime(distance) {
        //under 50km is the city => 2min /km
        //after 50km 1min /km
        let inCity = (distance > 49) ? 49 : distance;
        let outCity = distance - 49;
        
        let time = inCity * 2;
        if (outCity > 0) time += outCity;

        return time;
    }

    //The range and actual range differs in hybrid cars in city
    // @param: number, distance to travel
    // @return: number, the imapct on the remaining range after the trip 
    actualDistanceImpact(distance) {
        if (this.fuel != FUELS.MildHybrid) return distance;

        let outCity = distance - 49;
        let inCity = (distance > 49) ? 49 : distance;
        
        return (inCity/2 + outCity);
    }

    //How much does it cost to refuel vehicle after a traveled distance
    //  @param: distance: number, distance in km
    //  @return: number, cost of refueling in euro
    calcFuelCost(distance) {
        //€2 per kilometer traveled for gasoline and €1 for electric drive
        let fuelPrice = 2;
        if (this.fuel == FUELS.PureElectric) fuelPrice = 1;

        let traveledKm = this.actualDistanceImpact(distance); //hybrid cars consume less in city

        return traveledKm * fuelPrice;      
    }

    //Passanger's cost of a trip to given distance
    //  @param: distance: number, distance in km
    //  @return: number, travel fee in euro
    calcTravelFee(distance) {
        //€2 for every kilometer traveled plus another €2 for every half hour
        return (2 * distance) + (2 * (Math.ceil( this.calcTravelTime(distance) / 30 )));
    }

    // @return: bool, true if vehicle can handle the distance 
    canCover(distance) {
        return this.actualDistanceImpact(distance) <= this.range;
    }
}

exports.Vehicle = Vehicle;
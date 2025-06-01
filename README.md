# Backend_Assignment
Home assignment for a job interview.

Stack used:
- Node.js with express framework
- MongoDB database with mongoose package to handle db connection. 

# Quickstart
git clone
npm install
npm start /or/ node app.js

# Routes and request:
The application only sends a JSON response to every request on any of the routes. No frontend has been created so far.

- /vehicles
  - GET: Return the array of all the vehicles in the fleet
  - POST: Creates a new vehicle from request body and saves it to DB
- /vehicle/:vehicleId
  - GET: Returns the data of the vehicle with the given vehicleId
  - PATCH: Modifies the vehicle with the given vehicleId. Only modifies the values prrovided in request body.
  - DELETE: Deletes the vehicle from db.
- /trip
  - GET: Expect a distance and passanger count in query parameters (in the URL). Returns an array of all the vehicles that can handle the desired trip in the format specified below.

 # Trip format
/trip responds a JSON array of object, each object containes the following infromation:

- vehicleId: Db id of the vehicle
- travelTime: How long does the trip take in minutes (the same for every vehicle)
- fee: How much the passanger pays for the trip
- fuelCost: Cost of refueling the vehicle after the trip
- profit: Profit gained with the specific trip (= fees payes by the passanger - cost of fuel)
 
    

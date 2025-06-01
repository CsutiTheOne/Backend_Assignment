const express = require("express");
let app = express();

//routes
const vehicleRoutes = require("./routes/vehicle");
const tripRoutes = require("./routes/trip");

app.use(express.json())

app.use("/vehicles", vehicleRoutes);
app.use("/trip", tripRoutes);

app.listen(3000, () => {
    console.log("App is running!");
})
const express = require('express');
const rateLimit = require('express-rate-limit')

const Routers = require("./Router/Router")

const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();




// Apply the rate limiting middleware to all requests


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://kasacocuk19:u5yQEPD2xZMz7C25@suicidenotes.blvtss2.mongodb.net/?retryWrites=true&w=majority").
then(() => {
    app.use("/api/v1/", Routers);
    app.listen(5000)

}).
catch(error => {
    console.log(error + " ERROR MONGOOSE CONNECTION")
});




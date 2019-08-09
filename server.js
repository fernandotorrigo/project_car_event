const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

mongoose.connect(
    'mongodb://localhost:27017/project_car_event',
    { useNewUrlParser: true }
 );

const app = express();

requireDir("./src/models");

const Contact = mongoose.model("Contact");

app.use("/api", require("./src/routes"));//configurando require dinamico para routes

app.listen(3001)
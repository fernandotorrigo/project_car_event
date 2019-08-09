const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//mongoose.connect('mongodb://localhost:27017/car_event', { useNewUrlParser: true });
const app = express();

requireDir("./src/models");

app.use("/api", require("./src/routes"));//configurando require dinamico para routes

app.listen(3001)
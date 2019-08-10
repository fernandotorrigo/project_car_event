const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const dbConfig = require('./config/database');//configuração do banco

mongoose.connect(dbConfig.url, { 'useCreateIndex': true, useNewUrlParser: true });

const app = express();

app.use(express.json());

requireDir(dbConfig.modelsPath);

const Contact = mongoose.model("Contact");

const Schedule = mongoose.model("Schedule");

const User = mongoose.model("User");

app.use("/api", require("./src/routes"));//configurando require dinamico para routes

app.listen(3001);
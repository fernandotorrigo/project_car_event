//Arquivo de configuração de rotas
const express = require('express');
const routes = express.Router();

const ContactController = require("./controllers/ContactController");//Require do controller

routes.get("/contacts", ContactController.index);//Acionando o metodo index do controller

module.exports = routes;
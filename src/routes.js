//Arquivo de configuração de rotas
const express = require('express');
const routes = express.Router();

const ContactController = require("./controllers/ContactController");//Require do controller

routes.get("/contacts", ContactController.index);//Acionando o metodo index do controller
routes.get("/contact/:id", ContactController.showById);//Listar por id
routes.delete("/contact/:id", ContactController.removeById);//Remove por ID
routes.put("/contact/:id", ContactController.updateById);//Update por id
routes.post("/contact", ContactController.create);//Criando novo contato

module.exports = routes;
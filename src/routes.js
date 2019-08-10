//Arquivo de configuração de rotas
const express = require('express');
const routes = express.Router();

//Routes for contacts
const ContactController = require("./controllers/ContactController");//Require do controller

routes.get("/contacts", ContactController.index);//Acionando o metodo index do controller
routes.get("/contact/:id", ContactController.showById);//Listar por id
routes.delete("/contact/:id", ContactController.removeById);//Remove por ID
routes.put("/contact/:id", ContactController.updateById);//Update por id
routes.post("/contact", ContactController.create);//Criando novo contato

//routes for schedule
const ScheduleController = require("./controllers/ScheduleController");//Require do controller

routes.get("/schedules", ScheduleController.index);//Acionando o metodo index do controller
routes.get("/schedule/:id", ScheduleController.showById);//Listar por id
routes.delete("/schedule/:id", ScheduleController.removeById);//Remove por ID
routes.put("/schedule/:id", ScheduleController.updateById);//Update por id
routes.post("/schedule", ScheduleController.create);//Criando novo schedule


//routes for User
const UserController = require("./controllers/UserController");//Require do controller
const AuthController = require("./controllers/AuthController");//Require do controller

routes.get("/users", UserController.index);//Acionando o metodo index do controller
routes.get("/user/:id", UserController.showById);//Listar por id
routes.delete("/user/:id", UserController.removeById);//Remove por ID
routes.put("/user/:id", UserController.updateById);//Update por id
routes.post("/user", UserController.create);//Criando novo user

routes.post("/singin", AuthController.singin);//Criando novo user

module.exports = routes;
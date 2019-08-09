//Arquivo de configuração de rotas
const express = require('express');
const routes = express.Router();

routes.get("/", (req, res) => {
    // Contact.create(
    // {
    //     name: "Nome cliente",
    //     email: "email@email.com",
    //     phone: "11977005711",
    //     coment: "eu gostaria de saber o que podemos fazer agora"
    // }
    // );
    return res.send("Rota base");
});

module.exports = routes;
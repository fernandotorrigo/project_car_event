const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports = {
    async index(req, res) {
        const user = await User.find();
        return res.json(user);
    },

    async create(req, res) {
        const user = await User.create(req.body);

        if(user){
            response = {
                code: '0',
                detail: "inserido com sucesso"
            }
        }else{
            response = {
                code: '99',
                detail: "Erro ao inserir contato"
            }
        }
        return res.json(response);
    },

    async showById(req, res){
        const user = await User.findById(req.params.id);
        
        return res.json(user);
    },

    async updateById(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(user);
    },
    
    async removeById(req, res) {
        const user = await User.findByIdAndRemove(req.params.id);
        
        if(user){
            response = {
                code: '0',
                detail: "removido com sucesso!"
            }
        }else{
            response = {
                code: '99',
                detail: "Erro ao remover registro."
            }
        }
        return res.json(response);
    },
};
const mongoose = require("mongoose");

const Contact = mongoose.model("Contact");

module.exports = {
    async index(req, res) {
        const contacts = await Contact.find();
        return res.json(contacts);
    },

    async create(req, res) {
        const contact = await Contact.create(req.body);

        if(contact){
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
        const contact = await Contact.findById(req.params.id);
        
        return res.json(contact);
    },

    async updateById(req, res) {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(contact);
    },
    
    async removeById(req, res) {
        const contact = await Contact.findByIdAndRemove(req.params.id);
        
        if(contact){
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
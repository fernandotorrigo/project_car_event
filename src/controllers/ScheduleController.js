const mongoose = require("mongoose");

const Schedule = mongoose.model("Schedule");

module.exports = {
    async index(req, res) {
        const schedules = await Schedule.find();
        return res.json(schedules);
    },

    async create(req, res) {
        const schedule = await Schedule.create(req.body);

        if(schedule){
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
        const schedule = await Schedule.findById(req.params.id);
        
        return res.json(schedule);
    },

    async updateById(req, res) {
        const schedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(schedule);
    },
    
    async removeById(req, res) {
        const schedule = await Schedule.findByIdAndRemove(req.params.id);
        
        if(schedule){
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
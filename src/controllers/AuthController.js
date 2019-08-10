const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports = {
    async singin(req, res, next){
        try{
            const { email, password } = req.body;

            const user = await User.findOne({email});

            if(!user){
                return res.status(400).json({ error: 'Usuário invalido'})
            }

            if(!await user.compareHash(password)){
                return res.status(400).json({ error: 'Senha invalida'})
            }

            return res.json({
                user,
                token: user.generateToken(),
            });

        } catch(err){
            return next(err);
        }
    },
};
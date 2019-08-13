const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const authConfig = require("../../config/auth");

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(200).json({ error: 'Token inválido'});
    }

    const parts =  authHeader.split(' ');

    if(!parts.lenght === 2){
        return res.status(200).json({ error: 'Len token inválido'});
    }

    const [scheme, token] = parts;

    if(scheme != 'Bearer'){
        return res.status(200).json({ error: 'Formato de token inválido'});
    }

    try{
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);

        req.userId = decoded.id;
        return next();

    }catch(err){
        return res.status(200).json({ error: "Token com erro:"+ err});
    }
}
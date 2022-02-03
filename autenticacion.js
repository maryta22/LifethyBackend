const jsonwebtoken = require("jsonwebtoken");

function generarTokens(payload){
    return jsonwebtoken.sign(payload,"secreto",{expiresIn: "86400s"});
}

function validarTokens( req, res, next){
    const autorizacion = req.header("Authorization");
    const token = autorizacion && autorizacion.split(" ")[1];
    console.log(autorizacion)
    if(!token){
        return res.status(404).json({
            status: 404,
            message: "No es un token válido *gatito enojado*"
        })
    }
    jsonwebtoken.verify(token,"secreto", (err, payload)=>{
        if(err){
            return res.status(404).json({
                status: 404,
                message: "El token es invalido *gatito poco enojado*"
            })
        }

        req.usuarioconectado = payload;
        next();
    })
}

module.exports = {generarTokens, validarTokens};
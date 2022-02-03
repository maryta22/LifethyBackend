const { token } = require("morgan")
const auth = require("../autenticacion")

const Usuario = require('../models').usuario;

exports.iniciarSesion = async(req, res, next) =>{

    const cuenta = await Usuario.findOne({
        //comparar la contraseña encriptada
        where: { correo : req.body.correo, password : req.body.password}
    })

    if(cuenta){
        //genero un token
        const token = auth.generarTokens({
            usuario : cuenta.id,
            rol : cuenta.idRol
        })

        return res.json({token : token, user:{
            id: cuenta.id,
            rol: cuenta.idRol,
            nombre: cuenta.nombre,
            apellido: cuenta.apellido,
            correo: cuenta.correo
        }})
    }else{
        return res.status(404).json({
            status: 404,
            message: "No te boa dejar entrar"
        })
    }
}
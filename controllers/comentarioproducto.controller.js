const comentarioproducto = require("../models").comentarioproducto

const usuario = require("../models").usuario

exports.obtenerComentarioProducto = async (req,res,next) =>{
    idProducto = req.params.idProducto
    if (!idProducto){
        return res.status(400).json({
            status:400,
            message:"No se ha proporcionado el ID"
        })
    }
    const comentarios = await comentarioproducto.findAll({
       include: [
           {model: usuario,attributes: ["id","nombre","apellido"]}
       ],
        where: {
            idProducto:  idProducto
        }
    })
    return res.json(comentarios)

}

exports.crearComentarioProducto = async (req,res,next) =>{
    /*
        comentario:
        idProducto: 
    */
   comment = req.body.comentario;
   idProducto = req.params.idProducto;
   idUsuario = req.usuarioconectado;
    console.log(idUsuario)
   if (comment && idUsuario && idProducto){
        const comentario = await comentarioproducto.create({
            comentario: comment,
            idProducto: idProducto,
            idUsuario: idUsuario.usuario
        })
        if (comentario){

            return res.json(comentario)
        }
   }
   
   return res.status(400).json({
       status:400,
       message: "No se ha podido publicar el comentario"
   })

}
exports.modificarComentarioProducto = async(req,res,next) =>{
    comment = req.params.comentarioID;
    comenta = req.body.comentario
    idUsuario = req.usuarioconectado;
    if(comment&&idUsuario){
        const comentario = await comentarioproducto.update(
            {comentario:comenta},
            {where: {id:comment,idUsuario:idUsuario.usuario}}
        )
        return res.status(200).json({
            status:200,
            payload: comentario
        })
    }
    res.status(400).json({
        status:400,
        message: "No se ha actualizado"
    })
}

exports.eliminarComentarioProducto = async(req,res,next) =>{
    comment = req.params.comentarioID;
    idUsuario = req.usuarioconectado;
    if (comment && idUsuario){
        const commentario = await comentarioproducto.destroy({
            where: {
            id:comment,
            idUsuario:idUsuario.usuario
        }})
        console.l
        return res.status(204).json(commentario)
    }
    return res.status(400).json({
        status:400,
        message: "No se ha podido eliminar el comentario"
    })
}
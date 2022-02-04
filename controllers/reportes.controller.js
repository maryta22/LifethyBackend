const reportesCollections = require("../collections/reportes.collections")


exports.obtenerReportes = (req, res, next) => {
    const fechaDeInicio = req.params.fechaInicio;
    const fechaDeFin = req.params.fechaFin;

    reportesCollections.aggregate([
        {
            $project:{
                item:1,
                diferencia:{$subtract:["$fechaFin","$fechaInicio"]
                
            }
        },/*
        {$group:{
                    _id:"$id_cliente"
        ,minutos: {
           $sum : "$diferencia"
        }}}*/
            
        }],
        (error, documentos)=>{
            res.json(documentos)
        }
    )
}
const nodemon = require("nodemon")
const proyectoCollections = require("../collections/proyecto.collections")

exports.obtenerTodo = (req, res, next) => {
    proyectoCollections.find(
        {},
        (error, documentos)=>{
            res.json(documentos)
        }
    )
}

exports.ontenerFacturasPorMes = (req, res, next) => {
    const anio = req.query.anio
    //En la colección de proyecto
    proyectoCollections.aggregate(
        [
            {
                $match : {
                    //Todos los documentos que cumplan con esta expresión :v
                    fecha : {
                        $gte : new Date(`${anio}-01-01T00:00:00`), 
                        $lte : new Date(`${anio}-12-31T00:00:00`)
                    }
            }},
            {
                $group : { 
                    _id: { 
                        mes : { 
                            $month : "$fecha"
                        }, 
                        anio : { 
                            $year : "$fecha"
                        }}, count : { $sum : 1}}
            }
        ],
        (error, documentos)=>{
            res.json(documentos)
        }
    )
}

exports.obtenerTiposDePago = (req,res,next) => {
    const anio = req.query.anio
    proyectoCollections.aggregate(
        [
            {
                $match : {
                    //Todos los documentos que cumplan con esta expresión :v
                    fecha : {
                        $gte : new Date(`${anio}-01-01T00:00:00`), 
                        $lte : new Date(`${anio}-12-31T00:00:00`)
                    }
            }},
            {
                $group : { 
                    _id: "$metodo_de_pago" , count : { $sum : 1}
                }
            }
        ],
        (error, documentos)=>{
            console.log(documentos)
            return res.json(documentos)
        }
    )
}

exports.obtenerIngresosAnuales = (req, res, next) => {
    const anio = req.query.anio
    proyectoCollections.aggregate(
        [
            {
                $match : {
                    fecha : {
                        $gte : new Date(`${anio}-01-01T00:00:00`), 
                        $lte : new Date(`${anio}-12-31T00:00:00`)
                    }
            }},
            {
                $group : { 
                    _id: { 
                        mes : {
                            $month : "$fecha"
                    }}, 
                    count : { 
                            $sum : { $toInt: "$total"} 
                    }
                
                }
            }
        ],
        (error, documentos)=>{
            console.log("totales")
            console.log(documentos)
            return res.json(documentos)
        }
    )
}
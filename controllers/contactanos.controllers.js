var mail = require('../mail')


exports.recibirFormsContacto = (req,res,next)=>{
    mail.sendMail({
        from : "darwimaras085@gmail.com" , 
        to: "maria.mariaog.rivera@gmail.com",
        subject : "Envio de formulario de contacto",
        text : JSON.stringify(req.body)
    }, (error , info ) => {
        if (error) {
            return res.status(500).json({
                status: 500,
                message: "Error"
            })
        } else {
            return res.json({
                status: 200,
                message: "Your contact form has been submitted succesfully"
            })
        }
    })
    
}
//middleware de autenticacion
const moment = require("moment");
// Moment = modulo que maneja fechas   
const logger = (req, res, next)=> {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}




module.exports = logger;
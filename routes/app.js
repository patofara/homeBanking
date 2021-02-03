const express = require('express')
const app = express()

const db = require("./conexion")
db.init()
    .then(async () => {
        console.log('Conectado a la Base de Datos');
        app.listen(3000, () => {
            console.log('Server funcionando');
        });
    }).catch((err) => {
        console.log('Error al conectar a la db', err);
    });
const helmet = require('helmet')
const rateLimit = require("express-rate-limit");

app.use(express.json())
app.use(helmet())

const checkLimite = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 5,
    message: "Too much request"
})
var cors = require('cors')
app.use(cors())

module.exports = app;

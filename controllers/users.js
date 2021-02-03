const express = require('express')
const router = express.Router()
const db = require("../routes/conexion")


var {datosRecibidos} = require("../routes/middleware")

router.get('/', async (req, res) => {
    const users = await db.query(`SELECT * FROM users`);
    
        res.json(users)
    
})

router.post('/', datosRecibidos, (req, res) => {
    const { nombre, apellido, email, edad, password } = req.body;
    const nuevoUser = {
        nombre,
        apellido,
        email,
        edad,
        password
    };
    users.push(nuevoUser);
    res.status(201).json(nuevoUser)
})

module.exports = router
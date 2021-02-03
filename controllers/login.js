const express = require('express')
const router = express.Router()
var {datosLogin,validacionJwt} = require("../routes/middleware")

router.post("/", datosLogin, validacionJwt, (req, res) => {
    res.status(200).json({ exito: req.user})

});

module.exports = router
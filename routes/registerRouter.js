const Controller = require('../controllers/registerController')
const router = require('express').Router()

router.post('/', Controller.registerPost)

module.exports = router
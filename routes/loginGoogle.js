const LoginGoogleController = require('../controllers/loginGoogleController')
const router = require('express').Router()

router.post('/', LoginGoogleController.loginGooglePost)

module.exports = router
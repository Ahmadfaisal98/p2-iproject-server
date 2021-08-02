const jwt = require('jsonwebtoken')

function generateJWT(payload) {
    return jwt.sign(payload, process.env.JWT_KEY)
}
function validateJWT(token) {
    return jwt.verify(token, process.env.JWT_KEY)
}

module.exports = {
    generateJWT,
    validateJWT
}

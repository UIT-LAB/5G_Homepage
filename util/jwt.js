const jwt = require('jsonwebtoken');
const key = require('../routes/auth/key');

module.exports = {
    verifyToken(token) {
        try {
            return jwt.verify(token, key);
        } catch (err) {
            console.log(err);
            return null;
        }
    }
}
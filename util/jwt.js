const jwt = require('jsonwebtoken');
const key = require('../routes/auth/key');

module.exports = {
    verifyToken(token) {
        if(token == undefined || token == '') {
            console.log('로그인 안되어있음, verifytoken');
            return;
        } else {
            try {
                return jwt.verify(token, key);
            } catch (err) {
                console.log(err);
                return null;
            }
        }
    }
}
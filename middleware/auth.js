const jwt = require('jsonwebtoken');
const { verifyToken } = require('../util/jwt');
const key = require('../routes/auth/key');
const indexDAO = require('../model/indexDAO');

const auth = async (req, res, next) => {
    if (req.cookies.user || req.cookies.refreshToken) {
        const accessToken = await verifyToken(req.cookies.user);
        const refreshToken = await verifyToken(req.cookies.refreshToken);

        if (accessToken === undefined || accessToken === null) {
            if (refreshToken === undefined) { // accessToken과 refreshToken 모두 만료된 경우
                res.clearCookie('user');
                res.clearCookie('refreshToken');
                res.send('<script>alert(`세션이 만료되었습니다.`); location.href=`/login`</script>');
            } else { // accessToken은 만료됐지만, refreshToken은 유효한 경우
                console.log('accessToken은 만료됐지만, refreshToken은 유효한 경우');
                let parameters = {
                    token: req.cookies.refreshToken
                }
                try {
                    const user_data = await indexDAO.select_Profile(parameters);
                    if (user_data[0].u_id === undefined || user_data[0].u_name === undefined) {
                        console.log('asd00');
                        res.send(`<script>alert('다른 컴퓨터에서 로그인했습니다.')<script>`).redirect('/logout')
                    } else {
                        const user = {
                            id: user_data[0].u_id,
                            name: user_data[0].u_name,
                        }

                        const newAccessToken = await jwt.sign({ user: user }, key, { expiresIn: '30m' });
                        res.cookie('user', newAccessToken);
                        next();
                    }
                } catch (err) {
                    console.log(err);
                    next();
                }
            }
        } else { // accessToken은 유효하지만 refreshToken이 만료된 경우
            if (refreshToken === undefined) {
                console.log('// accessToken은 유효하지만 refreshToken이 만료된 경우');
                const newRefereshToken = jwt.sign({}, key, { expiresIn: '1d' });
                res.cookie('refereshToken', newRefereshToken);
                next();
            } else { // accessToken과 refreshToken 모두가 유효한 경우
                console.log(' // accessToken과 refreshToken 모두가 유효한 경우')
                let jwtname = accessToken.user.name;
                let jwtid = accessToken.user.id;
                let isAd = accessToken.user.isAd;
                req.body.jwtname = jwtname;
                req.body.jwtid = jwtid;
                req.body.isAd = isAd
                next();
            }
        }
    } else {
        console.log('로그인 안되어있음');
        next();
    }
}

module.exports = {
    auth
}
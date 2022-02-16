const dayjs = require('dayjs');
const crypto = require('crypto');
const indexDAO = require('../model/indexDAO');

const rootPage = async (req, res) => {
    try {
        let parameters = {
            token: req.cookies.refreshToken
        }
        const g_result = await indexDAO.select_Gallery();
        const r_result = await indexDAO.select_Research();
        const n_result = await indexDAO.select_Notice();
        const l_result = await indexDAO.select_License();
        if(req.cookies.user) {
            const name = await indexDAO.select_Profile(parameters);
            console.log(req.cookies);
            console.log(name);
            res.render('index', { 'g_result': g_result, 'r_result': r_result, 'n_result': n_result, dayjs, 'p_result': l_result, 'name': name[0].u_name, cookie: req.cookies.user });
        } else {
            res.render('index', { 'g_result': g_result, 'r_result': r_result, 'n_result': n_result, dayjs, 'p_result': l_result, 'name': req.body.jwtname, cookie: req.cookies.user });
        }
    } catch (err) {
        throw err;
    }
}

const profile = (req, res) => {
    let parameters = {
        token: req.cookies.refreshToken
    }

    indexDAO.select_Profile(parameters)
        .then((db_data) => {
            res.render('login/profile', { result: db_data, cookie: req.cookies.user, dayjs });
        })
        .catch((err) => {
            throw err;
        })
}

const getUpdateProfile = (req, res) => {
    let parameters = {
        jwtname : req.body.jwtname
    }

    indexDAO.get_update_Profile(parameters)
        .then((db_data) => {
            res.render('login/profile_update', { result: db_data, name: req.body.jwtname, cookie: req.cookies.user, dayjs });
        })
        .catch((err) => {
            throw err;
        })
}

const postUpdateProfile = (req, res) => {
    let profile_name = req.body.profile_name;
    let profile_phone = req.body.profile_phone;
    let profile_email = req.body.profile_email;
    let profile_image = req.file.filename;
    let token = req.cookies.user;

    let parameters = {
        profile_email,
        profile_name,
        profile_phone,
        profile_image,
        token
    }

    indexDAO.update_Profile(parameters)
        .then(() => {
            console.log(parameters);
            res.send('<script>alert(`정보가 수정되었습니다.`); location.href=`/profile`</script>')
        })
        .catch((err) => {
            throw err;
        })
}

const getProfilePassword = (req, res) => {
    res.render('login/profile_changePw');
}

const postProfilePassword = async (req, res) => {
    let currentpw = req.body.currentpw;
    let changepw = req.body.changepw;
    let user_id = req.body.jwtid;
    let currentoutput = crypto.createHash('sha512').update(currentpw).digest('base64')
    let changeoutput = crypto.createHash('sha512').update(changepw).digest('base64')
    let parameters = {
        currentoutput,
        changeoutput,
        user_id
    }
    const db_data = await indexDAO.is_Password(parameters);
    if(db_data[0].isChk == 0) {
        res.send('<script>alert(`비밀번호가 일치하지 않습니다.`); history.back();</script>')
    } else if(db_data[0].isChk == 1) {
        try {
            await indexDAO.update_Password(parameters);
        } catch(err) {
            throw err;
        }
        res.redirect('/profile');
    }
}

module.exports = {
    rootPage,
    profile,
    getUpdateProfile,
    postUpdateProfile,
    getProfilePassword,
    postProfilePassword
}
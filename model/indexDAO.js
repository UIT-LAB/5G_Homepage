const db = require('../config/db');

const select_Gallery = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT gid, g_title, g_img FROM Gallery ORDER BY g_write_date DESC LIMIT 3`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const select_Research = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT tid, thesis_name FROM thesis ORDER BY tid DESC LIMIT 3`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const select_Notice = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT nid, n_title FROM Notice_Board ORDER BY nid DESC LIMIT 3`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const select_License = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT lid, invention_name FROM license ORDER BY lid DESC LIMIT 3`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const select_Profile = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM UserInfo WHERE token = '${parameters.token}'`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        });
    })
}

const get_update_Profile = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM UserInfo WHERE u_id = '${parameters.jwtid}'`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const update_Profile = (parameters) => {
    return new Promise((resolve, reject) => {
        console.log(parameters);
        db.query(`UPDATE UserInfo SET u_name = '${parameters.profile_name}', u_phone = '${parameters.profile_phone}', u_email = '${parameters.profile_email}', u_image = '${parameters.profile_image}' WHERE token = '${parameters.token}'`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const is_Password = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT EXISTS (SELECT * FROM UserInfo WHERE u_pw = '${parameters.currentoutput}') as isChk`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const update_Password = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE UserInfo SET u_pw = '${parameters.changeoutput}' WHERE u_pw = '${parameters.currentoutput}' && u_id = '${parameters.user_id}'`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

module.exports = {
    select_Gallery,
    select_Research,
    select_Notice,
    select_License,
    select_Profile,
    get_update_Profile,
    update_Profile,
    is_Password,
    update_Password
}
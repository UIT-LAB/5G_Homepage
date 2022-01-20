const db = require('../config/db');

const login = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM UserInfo WHERE u_id = ${db.escape(parameters.u_id)} && u_pw = ${db.escape(parameters.u_pw)}`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const insertToken = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE UserInfo SET token = '${parameters.refreshToken}' WHERE u_id = '${parameters.u_id}'`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const findId = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT u_id FROM UserInfo WHERE u_name = ${db.escape(parameters.name)} && u_email = ${db.escape(parameters.email)}`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        });
    })
}

const findPw = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT EXISTS (SELECT * FROM UserInfo WHERE u_id=${db.escape(parameters.u_id)} && u_email=${db.escape(parameters.u_email)}) as isChk`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const pwCheck = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE UserInfo SET u_pw = ${db.escape(parameters.output)} WHERE u_id = ${db.escape(parameters.u_id)}`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const signUp = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO UserInfo SET ?`, parameters, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const isIdDup = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`Select EXISTS (Select * from UserInfo where u_id = ${db.escape(parameters.chk_id)}) as isChk`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        }) 
    })
}

module.exports = {
    login,
    insertToken,
    findId,
    findPw,
    pwCheck,
    signUp,
    isIdDup
}
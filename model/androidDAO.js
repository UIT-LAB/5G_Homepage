const db = require('../config/db');

const noticeDB = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM Notice_Board WHERE shows = '1' ORDER BY nid DESC`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        });
    })
}

const galleryDB = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM Gallery WHERE shows = '1' ORDER BY gid DESC`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        });
    })
}

const memberDB = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM Member JOIN Member_career ON Member.mid = Member_career.mid WHERE NOT Member.m_partdivision IN ('${parameters.student}', '${parameters.enterprise}')`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const thesisDB = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM thesis WHERE shows = '1' ORDER BY tid DESC`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const technologyDB = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM technology WHERE shows = '1' ORDER BY tid DESC`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const licenseDB = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM license WHERE shows = '1' ORDER BY tid DESC`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const standardDB = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM standard WHERE shows = '1' ORDER BY tid DESC`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const softwareDB = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM software WHERE shows = '1' ORDER BY tid DESC`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const check_pw = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT EXISTS (SELECT * FROM UserInfo WHERE u_pw=${db.escape(parameters.pw)} && token=${db.escape(parameters.refreshToken)}) as isChk`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const change_pw = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(``)
    })
}

module.exports = {
    noticeDB,
    galleryDB,
    memberDB,
    thesisDB,
    licenseDB,
    technologyDB,
    standardDB,
    softwareDB,
    check_pw,
    change_pw
}
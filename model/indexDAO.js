const db = require('../config/db');

const select_Gallery = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT gid, g_title, g_img FROM Gallery ORDER BY g_write_date DESC LIMIT 3`, (err, db_data) => {
            if(err) {
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
            if(err) {
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
            if(err) {
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
    select_License
}
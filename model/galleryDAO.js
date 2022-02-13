const db = require('../config/db');

const createGallery = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO Gallery SET ?`, parameters, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const updatePage = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM Gallery WHERE gid = '${parameters.num}'`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                console.log(db_data);
                resolve(db_data);
            }
        })
    })
}

const updateGallery = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE Gallery SET g_title = ${db.escape(parameters.title)}, g_img = ${db.escape(parameters.string)} WHERE g_title = ${db.escape(parameters.titlex)}`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                console.log(db_data);
                resolve(db_data);
            }
        })
    })
}

const delete_Gallery = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM Gallery WHERE gid = ${db.escape(parameters.gid)}`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const readGalleryPage = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM Gallery ORDER BY gid DESC`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                console.log(db_data);
                resolve(db_data);
            }
        })
    })
}

const readGalleryDetail = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM Gallery WHERE gid = ${db.escape(parameters.gid)}`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

module.exports = {
    createGallery,
    updatePage,
    updateGallery,
    delete_Gallery,
    readGalleryPage,
    readGalleryDetail
}
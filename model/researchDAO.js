const db = require('../config/db');

const thesis_page = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT tid, SCI_division, thesis_name, lead_author_name, co_author_name FROM thesis ORDER BY tid DESC`, (err, db_data) => {
            if (err) {
                reject(err)
            } else {
                resolve(db_data);
            }
        })
    })
}

const thesis_detail = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM thesis WHERE tid = ${db.escape(parameters.tid)}`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const license_page = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT lid, invention_name, business_year, standard_license_status FROM license ORDER BY lid DESC`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const license_detail = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM license WHERE lid = ${db.escape(parameters.lid)}`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const software_page = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT sid, registration_num, registration_name, registration_date FROM software ORDER BY sid DESC`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const software_detail = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM software WHERE sid = ${db.escape(parameters.sid)}`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const standard_page = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT stid, document, approval_num, approval_date FROM standard ORDER BY stid DESC`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const standard_detail = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM standard WHERE stid = ${db.escape(parameters.stid)}`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const technology_page = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT tid, business_year, tech_name, TIinstitution_name FROM technology ORDER BY tid DESC`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const technology_detail = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM technology WHERE tid = ${db.escape(parameters.tid)}`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

module.exports = {
    thesis_page,
    thesis_detail,
    license_page,
    license_detail,
    software_page,
    software_detail,
    standard_page,
    standard_detail,
    technology_page,
    technology_detail
}
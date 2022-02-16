const db = require('../config/db');

const get_writter = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT writter FROM ${parameters.table} WHERE tid = ?`, [parameters.tid], (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}



const thesis_page_count = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT COUNT(CASE WHEN (thesis_name LIKE ? || abstracts LIKE ?) && shows = 1 THEN thesis_name END) AS COUNT FROM thesis`, [`%${parameters.search}%`, `%${parameters.search}%`], (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const android_thesis = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT tid, SCI_division, thesis_name, lead_author_name, co_author_name FROM thesis WHERE shows = '1' ORDER BY tid DESC`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const thesis_page = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT tid, SCI_division, thesis_name, lead_author_name, co_author_name FROM thesis WHERE (thesis_name LIKE ? || abstracts LIKE ?) && shows = '1' ORDER BY tid DESC LIMIT ?, ?`, [`%${parameters.search}%`, `%${parameters.search}%`, parameters.offset, parameters.limit], (err, db_data) => {
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
        db.query(`SELECT * FROM thesis WHERE tid = ${db.escape(parameters.tid)} && shows = '1'`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const thesis_write = (parameters) => {
    console.log(parameters);
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO thesis SET ?`, parameters, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const thesis_update = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE thesis SET ? WHERE tid = ?`, [parameters, parameters.tid],(err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const thesis_delete = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE thesis SET shows = '0' WHERE tid = ?`, [parameters.tid], (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const license_page_count = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT COUNT(CASE WHEN invention_name LIKE ? && shows = 1 THEN invention_name END) AS COUNT FROM license`, [`%${parameters.search}%`], (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const license_page = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT tid, invention_name, business_year, standard_license_status FROM license WHERE invention_name LIKE ? && shows = '1' ORDER BY tid DESC LIMIT ?, ?`, [`%${parameters.search}%`, parameters.offset, parameters.limit], (err, db_data) => {
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
        db.query(`SELECT * FROM license WHERE tid = ${db.escape(parameters.tid)}`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const license_write = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO license SET ?`, parameters, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const license_update = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE license SET ? WHERE tid = ?`, [parameters, parameters.tid],(err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const license_delete = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE license SET shows = '0' WHERE tid = ?`, [parameters.tid], (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const software_page_count = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT COUNT(CASE WHEN registration_name LIKE ? && shows = 1 THEN registration_name END) AS COUNT FROM software`, [`%${parameters.search}%`], (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const software_page = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT tid, registration_num, registration_name, registration_date FROM software WHERE registration_name LIKE ? && shows = '1' ORDER BY tid DESC LIMIT ?, ?`, [`%${parameters.search}%`, parameters.offset, parameters.limit], (err, db_data) => {
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
        db.query(`SELECT * FROM software WHERE tid = ${db.escape(parameters.tid)}`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const software_write = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO software SET ?`, parameters, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const software_update = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE software SET ? WHERE tid = ?`, [parameters, parameters.tid],(err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const software_delete = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE software SET shows = '0' WHERE tid = ?`, [parameters.tid], (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const standard_page_count = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT COUNT(CASE WHEN document LIKE ? && shows = 1 THEN document END) AS COUNT FROM standard`, [`%${parameters.search}%`], (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const standard_page = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT tid, document, approval_num, approval_date FROM standard WHERE (document LIKE ? || technical_summary LIKE ?) && shows = '1' ORDER BY tid DESC LIMIT ?, ?`, [`%${parameters.search}%`, `%${parameters.search}%`, parameters.offset, parameters.limit], (err, db_data) => {
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
        db.query(`SELECT * FROM standard WHERE tid = ${db.escape(parameters.tid)}`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const standard_write = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO standard SET ?`, parameters, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const standard_update = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE standard SET ? WHERE tid = ?`, [parameters, parameters.tid],(err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const standard_delete = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE standard SET shows = '0' WHERE tid = ?`, [parameters.tid], (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const technology_page_count = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT COUNT(CASE WHEN tech_name LIKE ? && shows = 1 THEN tech_name END) AS COUNT FROM technology`, [`%${parameters.search}%`], (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const technology_page = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT tid, business_year, tech_name, TIinstitution_name FROM technology WHERE tech_name LIKE ? && shows = '1' ORDER BY tid DESC LIMIT ?, ?`, [`%${parameters.search}%`, parameters.offset, parameters.limit], (err, db_data) => {
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

const technology_write = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO technology SET ?`, parameters, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const technology_update = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE technology SET ? WHERE tid = ?`, [parameters, parameters.tid],(err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const technology_delete = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE technology SET shows = '0' WHERE tid = ?`, [parameters.tid], (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

module.exports = {
    get_writter,
    
    thesis_page,
    thesis_detail,
    thesis_page_count,
    thesis_write,
    thesis_update,
    thesis_delete,
    android_thesis,

    license_page,
    license_detail,
    license_page_count,
    license_write,
    license_update,
    license_delete,

    software_page,
    software_detail,
    software_page_count,
    software_write,
    software_update,
    software_delete,

    standard_page,
    standard_detail,
    standard_page_count,
    standard_write,
    standard_update,
    standard_delete,

    technology_page,
    technology_detail,
    technology_page_count,
    technology_write,
    technology_update,
    technology_delete
}
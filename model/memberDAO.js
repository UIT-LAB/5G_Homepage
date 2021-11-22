const db = require('../config/db');

const member = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM Member JOIN Member_career ON Member.mid = Member_career.mid WHERE NOT Member.m_partdivision IN ('${parameters.student}', '${parameters.enterprise}')`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                console.log(db_data);
                resolve(db_data);
            }
        })
    }) 
}

module.exports = {
    member,
}
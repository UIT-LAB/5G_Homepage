const db = require('../config/db');

//------------------------------------notice
const notice_page = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT nid, n_title, n_writer_date, n_view FROM Notice_Board ORDER BY n_writer_date DESC`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const notice_detail = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM Notice_Board WHERE nid = ${db.escape(parameters.nid)}`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const notice_views = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE Notice_Board SET n_view = n_view + 1 WHERE nid = ${db.escape(parameters.nid)}`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const notice_write = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO Notice_Board SET ?`, parameters, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const get_update_notice = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM Notice_Board WHERE nid = ${db.escape(parameters.nid)}`, (err, db_data) => {
            if (err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const post_update_notice = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE Notice_Board SET n_title = ${db.escape(parameters.title)} , n_content = ${db.escape(parameters.content)} WHERE n_title = ${db.escape(parameters.titlex)} && n_content = ${db.escape(parameters.contentx)} && n_writer = ${db.escape(parameters.writerx)}`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const delete_notice = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM Notice_Board WHERE nid = ${ db.escape(parameters.nid) }`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

//------------------------------- post
const post_page = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT pid, p_title, p_writer, p_writer_date, p_view FROM Post_Board ORDER BY p_writer_date DESC`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const post_detail = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM Post_Board WHERE pid = ${db.escape(parameters.pid)}`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const post_view = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE Post_Board SET p_view = p_view + 1 WHERE pid = ${db.escape(parameters.pid)}`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const write_post = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO Post_Board SET ?`, parameters, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const get_update_post = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM Post_Board WHERE pid = ${db.escape(parameters.pid)}`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data)
            }
        })
    })
}

const post_update_post = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE Post_Board SET p_title = ${db.escape(parameters.title)} , p_content = ${db.escape(parameters.content)} , p_file = ${db.escape(parameters.string)} WHERE p_title = ${db.escape(parameters.titlex)} && p_content = ${db.escape(parameters.contentx)}`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const delete_post = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM Post_Board WHERE pid = ${db.escape(parameters.pid)}`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

//------------------------------question
const question_page = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT qid, q_title, q_writer, q_writer_date, admin_comment FROM Question_Board ORDER BY q_writer_date DESC`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const question_detail = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM Question_Board WHERE qid = ${db.escape(parameters.qid)}`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const post_write_question = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO Question_Board SET ?`, parameters, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const get_update_question = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM Question_Board WHERE qid = ${db.escape(parameters.qid)}`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const post_update_question = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE Question_Board SET q_title = ${db.escape(parameters.title)}, q_content = ${db.escape(parameters.content)} WHERE q_title = ${db.escape(parameters.titlex)} && q_content = ${db.escape(parameters.contentx)}`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const question_comment = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE Question_Board SET admin_comment = ${db.escape(parameters.adminx)} , admin_date = ${db.escape(parameters.admindatex)} WHERE q_title = ${db.escape(parameters.titlex)} && q_content = ${db.escape(parameters.contentx)}`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const delete_question_comment = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE Question_Board SET admin_comment = NULL WHERE qid = ${db.escape(parameters.qid)}`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

const delete_question = (parameters) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM Question_Board WHERE qid = ${db.escape(parameters.qid)}`, (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

module.exports = {
    notice_page,
    notice_detail,
    notice_views,
    notice_write,
    get_update_notice,
    post_update_notice,
    delete_notice,
    post_page,
    post_detail,
    post_view,
    write_post,
    get_update_post,
    post_update_post,
    delete_post,
    question_page,
    question_detail,
    post_write_question,
    get_update_question,
    post_update_question,
    question_comment,
    delete_question_comment,
    delete_question
}
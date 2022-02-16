const dayjs = require('dayjs');
const researchDAO = require('../../model/researchDAO');

const androidThesis = async (req, res) => {
    const db_data = await researchDAO.android_thesis();
    res.send({result: db_data});
}

const paging = (currentPage) => {
    const default_start_page = 1;
    const page_size = 15;
    if(currentPage < 1 || !currentPage) currnetPage = default_start_page;

    let result = {
        offset : (currentPage - 1) * page_size,
        limit : Number(page_size)
    }

    return result;
}

const thesis = async (req, res) => {
    const jwtname = req.body.jwtname;
    let search = req.query.search;
    let currentPage = req.params.num;
    const query = await paging(currentPage);
    if(search === undefined) search = "";
    let parameters = {
        search,
        offset: query.offset,
        limit: query.limit
    }

    try {
        const db_data_length = await researchDAO.thesis_page_count(parameters);
        const db_data = await researchDAO.thesis_page(parameters);
        console.log(db_data.length);
        res.render('research/thesis', { result: db_data, t_num: req.params.num, max_value: parameters.limit, dayjs, name: jwtname, cookie: req.cookies.user, parameters, data_length: db_data_length[0].COUNT });
    } catch(err) {
        throw err;
    }
}

const thesisDetail = (req, res) => {
    let parameters = {
        tid: req.params.num
    }
    let jwtname = req.body.jwtname;
    researchDAO.thesis_detail(parameters)
        .then((db_data) => {
            res.render('research/thesis_detail', { result: db_data, t_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user });
        })
        .catch((err) => {
            throw err;
        })
}

const getThesisWrite = (req, res) => {
    let jwtname = req.body.jwtname;
    res.render('research/thesis_write', {name: jwtname, cookie: req.cookies.user});
}

const thesisWrite = async (req, res) => {
    const parameters = req.body;
    delete parameters.jwtname;
    delete parameters.jwtid;
    delete parameters.isAd;

    try {
        await researchDAO.thesis_write(parameters);
        res.redirect('/research/thesis/1');
    } catch(err) {
        throw err;
    }
}

const getThesisUpdate = async (req, res) => {
    const tid = req.params.num;
    let jwtname = req.body.jwtname;
    let parameters = {
        tid
    }
    try {
        const db_data = await researchDAO.thesis_detail(parameters);
        res.render('research/thesis_update', { result: db_data, name: jwtname, cookie: req.cookies.user, num: parameters.tid});
        console.log(db_data);
    } catch(err) {
        throw err;
    }
}

const updateThesis = async (req, res) => {
    const parameters = req.body;
    delete parameters.jwtname;
    delete parameters.jwtid;
    delete parameters.isAd;
    parameters.tid = req.params.num;
    const jwtname = req.body.jwtname;
    try {
        await researchDAO.thesis_update(parameters);
        const db_data = await researchDAO.thesis_detail(parameters);
        res.render('research/thesis_detail', { result: db_data, t_num: parameters.tid, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user })
    }
    catch(err) {
        console.log(err);
    }
}

const deleteThesis = async (req, res) => {
    const parameters = {
        tid : req.params.num
    }
    try {
        await researchDAO.thesis_delete(parameters);
        res.redirect('/research/thesis/1');
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    androidThesis,
    thesis,
    thesisDetail,
    thesisWrite,
    getThesisWrite,
    updateThesis,
    getThesisUpdate,
    deleteThesis
}
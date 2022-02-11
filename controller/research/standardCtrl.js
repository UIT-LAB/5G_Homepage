const dayjs = require('dayjs');
const researchDAO = require('../../model/researchDAO');

const paging = (currentPage) => {
    const default_start_page = 1;
    const page_size = 15;
    if(currentPage < 1 || !currentPage) currnetPage = default_start_page;

    let result = {
        offset : (currentPage - 1) * page_size,
        limit : Number(page_size)
    }
    console.log(result);
    return result;
}

const standard = async (req, res) => {
    let jwtname = req.body.jwtname;
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
        const db_data_length = await researchDAO.standard_page_count(parameters);
        const db_data = await researchDAO.standard_page(parameters);
        console.log(db_data_length);
        res.render('research/standard', { result: db_data, st_num: req.params.num, max_value: parameters.limit, dayjs, name: jwtname, cookie: req.cookies.user, parameters, data_length: db_data_length[0].COUNT });
    } catch(err) {
        console.log(err);
    }
}

const standardDetail = (req, res) => {
    let parameters = {
        tid: req.params.num
    }
    let jwtname = req.body.jwtname;
    researchDAO.standard_detail(parameters)
        .then((db_data) => {
            res.render('research/standard_detail', { result: db_data, s_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user })
        })
        .catch((err) => {
            throw err;
        })
}

const getStandardWrite = (req, res) => {
    let jwtname = req.body.jwtname;
    res.render('research/standard_write', {name: jwtname, cookie: req.cookies.user});
}

const standardWrite = async (req, res) => {
    const parameters = req.body;
    delete parameters.jwtname;
    delete parameters.jwtid;

    try {
        await researchDAO.standard_write(parameters);
        res.redirect('/research/standard/1');
    } catch(err) {
        throw err;
    }
}

const getStandardUpdate = async (req, res) => {
    const tid = req.params.num;
    let jwtname = req.body.jwtname;
    let parameters = {
        tid
    }
    try {
        const db_data = await researchDAO.standard_detail(parameters);
        res.render('research/standard_update', { result: db_data, name: jwtname, cookie: req.cookies.user, num: parameters.tid});
    } catch(err) {
        throw err;
    }
}

const updateStandard = async (req, res) => {
    const parameters = req.body;
    delete parameters.jwtname;
    delete parameters.jwtid;
    parameters.tid = req.params.num;
    const jwtname = req.body.jwtname;
    try {
        await researchDAO.standard_update(parameters);
        const db_data = await researchDAO.standard_detail(parameters);
        res.render('research/standard_detail', { result: db_data, s_num: parameters.tid, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user })
    }
    catch(err) {
        console.log(err);
    }
}

const deleteStandard = async (req, res) => {
    const parameters = {
        sid : req.params.num
    }
    console.log(parameters);
    try {
        await researchDAO.standard_delete(parameters);
        res.redirect('/research/standard/1');
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    standard,
    standardDetail,
    getStandardWrite,
    standardWrite,
    getStandardUpdate,
    updateStandard,
    deleteStandard
}
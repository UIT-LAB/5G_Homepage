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

    return result;
}

const technology = async (req, res) => {
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
        const db_data_length = await researchDAO.technology_page_count(parameters);
        const db_data = await researchDAO.technology_page(parameters);
        console.log(db_data_length);
        res.render('research/technology', { result: db_data, t_num: req.params.num, max_value: parameters.limit, dayjs, name: jwtname, cookie: req.cookies.user, cookie: req.cookies.user, parameters, data_length: db_data_length[0].COUNT });
    } catch(err) {
        console.log(err);
    }
}

const technologyDetail = (req, res) => {
    let parameters = {
        tid: req.params.num
    }
    let jwtname = req.body.jwtname;
    researchDAO.technology_detail(parameters)
        .then((db_data) => {
            res.render('research/technology_detail', { result: db_data, s_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user });
        })
        .catch((err) => {
            throw err;
        })
}

const getTechnologyWrite = (req, res) => {
    let jwtname = req.body.jwtname;
    res.render('research/technology_write', {name: jwtname, cookie: req.cookies.user});
}

const technologyWrite = async (req, res) => {
    const parameters = req.body;
    delete parameters.jwtname;
    delete parameters.jwtid;

    try {
        await researchDAO.technology_write(parameters);
        res.redirect('/research/technology/1');
    } catch(err) {
        throw err;
    }
}

const getTechnologyUpdate = async (req, res) => {
    const stid = req.params.num;
    let jwtname = req.body.jwtname;
    let parameters = {
        stid
    }
    try {
        const db_data = await researchDAO.technology_detail(parameters);
        res.render('research/technology_update', { result: db_data, name: jwtname, cookie: req.cookies.user, num: parameters.tid});
    } catch(err) {
        throw err;
    }
}

const updateTechnology = async (req, res) => {
    const parameters = req.body;
    delete parameters.jwtname;
    delete parameters.jwtid;
    parameters.tid = req.params.num;
    const jwtname = req.body.jwtname;
    try {
        await researchDAO.technology_update(parameters);
        const db_data = await researchDAO.technology_detail(parameters);
        res.render('research/technology_detail', { result: db_data, t_num: parameters.tid, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user })
    }
    catch(err) {
        console.log(err);
    }
}

const deleteTechnology = async (req, res) => {
    const parameters = {
        tid : req.params.num
    }
    console.log(parameters);
    try {
        await researchDAO.technology_delete(parameters);
        res.redirect('/research/technology/1');
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    technology,
    technologyDetail,
    getTechnologyWrite,
    technologyWrite,
    getTechnologyUpdate,
    updateTechnology,
    deleteTechnology
}
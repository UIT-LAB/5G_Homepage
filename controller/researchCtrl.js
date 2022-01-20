const dayjs = require('dayjs');
const researchDAO = require('../model/researchDAO');

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
            console.log(db_data);
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
    } catch(err) {
        throw err;
    }
}

const patchThesis = async (req, res) => {
    const parameters = req.body;
    delete parameters.jwtname;
    delete parameters.jwtid;
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

const license = (req, res) => {
    let jwtname = req.body.jwtname;
    researchDAO.license_page()
        .then((db_data) => {
            res.render('research/license', { result: db_data, l_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user });
        })
        .catch((err) => {
            throw err;
        })
}

const licenseDetail = (req, res) => {
    let jwtname = req.body.jwtname;
    let parameters = {
        lid: req.params.num
    }
    researchDAO.license_detail(parameters)
        .then((db_data) => {
            res.render('research/license_detail', { result: db_data, l_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user });
        })
}

const searchLicense = async (req, res) => {
    let input = req.body.input;
    let parameters = {
        input
    }
    const db_data = await researchDAO.search_license(parameters);
    console.log(db_data);
}

const software = (req, res) => {
    let jwtname = req.body.jwtname;
    researchDAO.software_page()
        .then((db_data) => {
            res.render('research/software', { result: db_data, s_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user });
        })
        .catch((err) => {
            throw err;
        })
}

const softwareDetail = (req, res) => {
    let parameters = {
        sid: req.params.num
    }
    let jwtname = req.body.jwtname;
    researchDAO.software_detail(parameters)
        .then((db_data) => {
            res.render('research/software_detail', { result: db_data, s_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user });
        })
}

const searchSoftware = async (req, res) => {
    let input = req.body.input;
    let parameters = {
        input
    }
    const db_data = await researchDAO.search_software(parameters);
    console.log(db_data);
}

const standard = (req, res) => {
    let jwtname = req.body.jwtname;
    researchDAO.standard_page()
        .then((db_data) => {
            res.render('research/standard', { result: db_data, st_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user });
        })
        .catch((err) => {
            throw err;
        })
}

const standardDetail = (req, res) => {
    let parameters = {
        stid: req.params.num
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

const searchStandard = async (req, res) => {
    let input = req.body.input;
    let parameters = {
        input
    }
    const db_data = await researchDAO.search_standard(parameters);
    console.log(db_data);
}

const technology = (req, res) => {
    let jwtname = req.body.jwtname;
    researchDAO.technology_page()
        .then((db_data) => {
            res.render('research/technology', { result: db_data, t_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user });
        })
        .catch((err) => {
            throw err;
        })
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

const searchTechnology = async (req, res) => {
    let input = req.body.input;
    let parameters = {
        input
    }
    const db_data = await researchDAO.search_technology(parameters);
    console.log(db_data);
}

module.exports = {
    thesis,
    thesisDetail,
    license,
    licenseDetail,
    software,
    softwareDetail,
    standard,
    standardDetail,
    technology,
    technologyDetail,
    thesisWrite,
    searchLicense,
    searchSoftware,
    searchTechnology,
    searchStandard,
    getThesisWrite,
    getThesisUpdate,
    patchThesis,
    deleteThesis
}
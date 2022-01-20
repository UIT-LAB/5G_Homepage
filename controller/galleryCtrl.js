let dayjs = require('dayjs');
const galleryDAO = require('../model/galleryDAO');

const getWrite = (req, res) => {
    let jwtname = req.body.jwtname;
    res.render('gallery/gallery_write', { dayjs, name: jwtname, cookie: req.cookies.user })
}

const postWrite = (req, res) => {
    let date = new dayjs();
    let title = req.body.gall_title;
    let datetime = date.format('YYYY-MM-DD');
    let files = req.files;
    let string = "";
    for (let k in files) {
        console.log(k + " : " + files[k].filename);
        string += files[k].filename + ",";
    }

    let parameters = {
        g_title: title,
        g_write_date: datetime,
        g_img: string
    };

    if (string == "") {
        res.send('<script>alert(`첨부된 파일이 없습니다.`); history.back(-1);</script>')
    }
    else {
        galleryDAO.createGallery(parameters)
            .then(() => {
                res.redirect("/gallery/1");
            })
            .catch((err) => {
                throw err;
            });
    }
}

const getUpdate = (req, res) => {
    let parameters = {
        num: req.params.num
    }
    let jwtname = req.body.jwtname;

    galleryDAO.updatePage(parameters)
        .then((db_data) => {
            if (db_data[0] !== undefined) {
                res.render('gallery/gallery_update', { result: db_data, g_num: parameters.num, dayjs, name: jwtname, cookie: req.cookies.user });
            } else {
                res.render('error');
            }
        })
        .catch((err) => {
            throw err;
        });
}

const postUpdate = (req, res) => {
    let title = req.body.gall_title;
    let titlex = req.body.titlex;
    let files = req.files;

    let string = "";
    for (let k in files) {
        console.log(k + " : " + files[k].filename);
        string += files[k].filename + ",";
    }

    let parameters = {
        title,
        string,
        titlex
    }

    galleryDAO.updateGallery(parameters)
        .then(() => {
            res.redirect('/gallery/1');
        })
        .catch((err) => {
            throw err;
        });
}

const deleteGallery = (req, res) => {
    let gid = req.body.gidx;

    let parameters = {
        gid
    }

    galleryDAO.delete_Gallery(parameters)
        .then(() => {
            res.redirect('/gallery/1');
        })
        .catch((err) => {
            throw err;
        });
}

const galleryPage = (req, res) => {
    let jwtname = req.body.jwtname;
    galleryDAO.readGalleryPage()
        .then((db_data) => {
            res.render('gallery/gallery', { result: db_data, g_num: req.params.num, max_value: 9, dayjs, name: jwtname, cookie: req.cookies.user });
        })
        .catch((err) => {
            throw err;
        });
}

const galleryDetail = (req, res) => {
    let parameters = {
        gid: req.params.num
    }

    let jwtname = req.body.jwtname;

    galleryDAO.readGalleryDetail(parameters)
        .then((db_data) => {
            console.log(db_data);
            res.render('gallery/gallery_detail', { result: db_data, g_num: db_data.gid, max_value: 9, dayjs, name: jwtname, cookie: req.cookies.user })
        })
        .catch((err) => {
            throw err;
        })
}

module.exports = {
    getWrite,
    postWrite,
    getUpdate,
    postUpdate,
    deleteGallery,
    galleryPage,
    galleryDetail
}
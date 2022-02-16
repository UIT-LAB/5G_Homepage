let dayjs = require('dayjs');
const galleryDAO = require('../model/galleryDAO');

const getWrite = (req, res) => {
    let jwtname = req.body.jwtname;
    const data = {dayjs, name:jwtname, cookie:req.cookies.user}
        res.send(data);
    
    // res.render('gallery/gallery_write', { dayjs, name: jwtname, cookie: req.cookies.user })
}

const postWrite = (req, res) => {
    let date = new dayjs();
    let title = req.body.title;
    let datetime = date.format('YYYY-MM-DD');
    let files = req.files;
    let str = "";
    for (let k in files) {
        console.log(k + " : " + files[k].filename);
        str += files[k].filename + ",";
    }

    string = str.slice(0, -1);

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
                res.send(true);
            })
            .catch((err) => {
                throw err;
            });
    }
}

const getUpdate = (req, res) => {
    let parameters = {
        num: req.query.num
    }
    let jwtname = req.body.jwtname;

    galleryDAO.updatePage(parameters)
        .then((db_data) => {
            if (db_data[0] !== undefined) {
                res.json({
                    db_data
                })
                // res.render('gallery/gallery_update', { result: db_data, g_num: parameters.num, dayjs, name: jwtname, cookie: req.cookies.user });
            } else {
                res.send('error');
            }
        })
        .catch((err) => {
            throw err;
        });
}

// const test = (req, res) => {
//     console.log(req.body);
// }

const postUpdate = (req, res) => {
    let title = req.body.title;
    let titlex = req.body.titlex;
    let files = req.files;

    console.log(req.files.length);

    let str = "";
    for (let k in files) {
            console.log(k + " : " + files[k].filename);
            str += files[k].filename + ",";
    }

    string = str.slice(0, -1);

    let parameters = {
        title,
        string,
        titlex
    }

    galleryDAO.updateGallery(parameters)
        .then((db_data) => {
            res.send(true);
            console.log(db_data)
        })
        .catch((err) => {
            throw err;
        });
}

const deleteGallery = (req, res) => {
    console.log(req.body);
    let gid = req.body.gidx;

    let parameters = {
        gid
    }

    galleryDAO.delete_Gallery(parameters)
        .then(() => {
            res.send(true);
        })
        .catch((err) => {
            throw err;
        });
}

const galleryPage = (req, res) => {
    let jwtname = req.body.jwtname;
    galleryDAO.readGalleryPage()
        .then((db_data) => {
            res.json({
                db_data
            })
            // res.render('gallery/gallery', { result: db_data, g_num: req.params.num, max_value: 9, dayjs, name: jwtname, cookie: req.cookies.user });
        })
        .catch((err) => {
            throw err;
        });
}

const galleryDetail = async (req, res) => {
    let parameters = {
        gid : req.query.num
    }

    let jwtname = req.body.jwtname;

    galleryDAO.readGalleryDetail(parameters)
        .then((db_data) => {
            res.json({
                db_data
            })
            console.log(db_data);
            // res.render('gallery/gallery_detail', { result: db_data, g_num: db_data.gid, max_value: 9, dayjs, name: jwtname, cookie: req.cookies.user })
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
    galleryDetail, 
}
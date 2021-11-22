const multer = require('multer');

const forGallery = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'public/images/gallery');
    },
    filename(req, file, cb) {
        cb(null, `${file.originalname}`);
    },
});

const forBoard = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'public/images/board');
    },
    filename(req, file, cb) {
        cb(null, `${file.originalname}`);
    },
});

const forIndex = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'public/images/profile');
    },
    filename(req, file, cb) {
        cb(null, `${file.originalname}`);
    },
});

const uploadGallery = multer({ storage: forGallery });
const uploadBoard = multer({ storage: forBoard })
const uploadIndex = multer({ storage: forIndex });

module.exports = {
    uploadGallery,
    uploadBoard,
    uploadIndex
};
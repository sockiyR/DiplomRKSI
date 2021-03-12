const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, 'public/images')
    },
    filename(req, file, cb){
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})


module.exports = multer({
    storage : storage
})

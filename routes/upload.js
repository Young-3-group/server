const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController')
const {getPublicUrl,sendUploadToGCS,multer} = require('../middlewares/middleware.js')
 
router.get('/', uploadController.showList)
router.post('/', multer.single('file'), sendUploadToGCS, uploadController.upload)

module.exports = router;
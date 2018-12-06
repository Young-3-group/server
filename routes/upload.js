const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController')

 
router.get('/', uploadController.test) // static functionnya silahkan diganti

module.exports = router;
const express = require('express');
const router = express.Router();
const shareController = require('../controllers/shareController')

 
router.get('/', shareController.test) // static functionnya silahkan diganti

module.exports = router;
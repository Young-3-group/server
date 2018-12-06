const express = require('express');
const router = express.Router();
const lyricsController = require('../controllers/lyricsController')

 
router.get('/', lyricsController.test) // static functionnya silahkan diganti

module.exports = router;
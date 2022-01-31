const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
const urlController = require('../controllers/url_controller');
const userRoute = require('./users');
const shortRoute = require('./shorts');


router.get('/', homeController.home);
router.use('/users', userRoute);
router.use('/short', shortRoute);


module.exports = router;
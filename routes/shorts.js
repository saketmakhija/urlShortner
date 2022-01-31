const express = require('express');
const router = express.Router();
const urlController = require('../controllers/url_controller');


router.post('/create', urlController.createUrl);
router.post('/', urlController.openUrl);

module.exports = router;
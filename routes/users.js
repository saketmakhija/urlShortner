const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');


router.get('/signup', userController.signup);
router.get('/signin', userController.signin);
router.get('/signout', userController.signout);

router.post('/create-session', userController.createSession);
router.post('/create', userController.createUser);


module.exports = router;
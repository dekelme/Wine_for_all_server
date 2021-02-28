const { Router } = require('express');
const router = new Router();  

const authLoginController = require('../controllers/googleAuth.ctrl');

router.post('/login', authLoginController.googleAuth);
router.get('/logout', authLoginController.getLogout);

module.exports = {router};
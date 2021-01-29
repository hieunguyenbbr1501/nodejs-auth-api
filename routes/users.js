var express = require('express');
var router = express.Router();
var controller = require('../controller/home')

/* GET users listing. */
router.post('/login',  controller.login);

module.exports = router;

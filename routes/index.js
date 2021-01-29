var express = require('express');
const controller = require("../controller/home");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/cost', controller.dashboard);
router.get('/service', controller.service);
router.get('/instance', controller.instance);
module.exports = router;

var express = require('express');
const controller = require("../controller/home");
const jwt = require("jsonwebtoken");
var router = express.Router();
function authenticateToken(req, res, next) {
  // Gather the jwt access token from the request header
  const token = req.headers.authorization
  if (token == null) return res.sendStatus(401) // if there isn't any token

  jwt.verify(token, 'test', (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next() // pass the execution off to whatever request the client intended
  })
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/cost', authenticateToken ,controller.dashboard);
router.get('/services', authenticateToken ,controller.service);
router.get('/instance', authenticateToken ,controller.instance);
module.exports = router;

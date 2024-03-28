var express = require('express');
var dotenv = require('dotenv').config();
var router = express.Router();

/* GET config listing. */
router.get('/', function(req, res, next) {
  const configs = {"birthday": process.env.birthday, "imagePath": process.env.imagePath}
  res.json(configs);
});

module.exports = router;

var express = require('express');
var router = express.Router();
var datos = require("../data/dataprovider");

/* GET home page. */
router.get('/', function(req, res, next) {
  const imagenes = datos.getAllPosts();
  res.render('index', { head_title: 'Principal', imagenes: imagenes });
});

router.get('/entrada', function(req, res, next) {
  res.render('entrada', { head_title: 'Entrada'});
});

module.exports = router;

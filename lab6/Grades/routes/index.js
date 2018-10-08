var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'get' });
});

/*Post grade page..*/
router.post('/', function(req, res, next) {
  res.render('index', { title: 'post' });
});

/*Put grade page..*/
router.put('/', function(req, res, next) {
  res.render('index', { title: 'put' });
});
/*Delete grade page..*/
router.delete('/', function(req, res, next) {
  res.render('index', { title: 'Delete' });
});


module.exports = router;

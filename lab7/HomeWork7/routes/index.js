var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').mongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
    // mongoClient.connect('mongodb://127.0.0.1:27017/Lab7', function(err, client){
    //   if(err) throw err;
    //   const db = client.db('Lab7');

    //   db.collection('Homework7').findOne({}, function(err ,doc){
    //       if(err) throw err;
    //       console.log(doc);

    //       client.close();

    //   });
    //   console.log('colled findone');
    // });
  

  res.json("doc");
});

module.exports = router;

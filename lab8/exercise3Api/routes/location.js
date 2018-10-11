'use strict';
const express = require('express');
const router = express.Router();
const db = require('../modules/mongoDbConnection');
const collectionName = 'locations'

/* GET home page. */
router.get('/', function (req, res, next) {
    let reqData = req.query;
    let col = db.get().collection(collectionName);
    col.find({ $and: [{location: {$near:[41.017654, -91.9665342]}}, 
        {'category': reqData.category} ]})
    .limit(3)
    .toArray((err, doc) => {
        //console.log(doc)
        res.status(200).json(doc);
    });
});

router.post('/', function (req, res, next) {
    console.log(req.body);
    let col = db.get().collection(collectionName);
    col.insertMany(req.body, (err, result) => {
        if (err) throw err;
        res.status(200).json({ result: "success!" });
    })
});

module.exports = router;
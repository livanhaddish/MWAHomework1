'use strict';

const { MongoClient } = require('mongodb')



let state = {

    db: null,

}



const connection = {

    connect: function (url, dbName, done) {

        if (state.db) return done()



        MongoClient.connect(url, {useNewUrlParser: true}, function (err, client) {

            if (err) return done(err)

            state.db = client.db(dbName);

            done()

        })

    },



    get: function() {

        return state.db

    },



    close: function (done) {

        if (state.db) {

            state.db.close(function (err, result) {

                state.db = null

                state.mode = null

                done(err)

            })

        }

    }

}



module.exports = connection;
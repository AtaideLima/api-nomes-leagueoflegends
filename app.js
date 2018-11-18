const mongojs = require('mongojs')

var mongodb = require('mongodb')
var db = mongojs('champs', ['infochamps'])
    db.infochamps.find(function (err, docs) {
        if(err) throw err
        console.log(docs)
    })



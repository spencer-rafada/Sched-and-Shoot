#! /usr/bin/env node

console.log('This test script populates the database for photographers.');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Photographer = require('../models/photographerSchema')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var photographers = []

function photographerCreate(first_name, last_name, age, city, cb) {
    photographerdetail = {first_name: first_name, last_name: last_name, age: age, city: city}
    
    var photographer = new Photographer(photographerdetail);

    photographer.save(function(err) {
        if (err) {
            cb(err, pull)
            return
        }
        console.log(`New Photographer + ${first_name}`)
        photographers.push(photographer)
        cb(null, photographer)
    });
}

async.series([
    function(callback){
        photographerCreate('Patrick', 'Pamintuan', '33', 'Rexburg', callback);
    },
    function(callback){
        photographerCreate('Spencer', 'Rafada', '23', 'Tarlac', callback);
    },
    function(callback){
        photographerCreate('Jaden', 'Remedy', '19', 'Houston', callback);
    }
]);




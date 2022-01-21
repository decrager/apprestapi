'use strict'

var response = require('./rest');
var connection = require('./koneksi');
const Connection = require('mysql/lib/Connection');

exports.index = function(req, res){
    response.ok("REST API Running", res)
};

//Show all data
exports.showMahasiswa = function(req,res) {
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};
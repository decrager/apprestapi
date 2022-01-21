'use strict'

var response = require('./rest');
var connection = require('./koneksi');
const Connection = require('mysql/lib/Connection');

exports.index = function (req, res) {
    response.ok("REST API Running", res)
};

//Show all data
exports.showMahasiswa = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

// Show data by id
exports.showMahasiswaid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res)
            }
        });
};

//Add data
exports.addMahasiswa = function (req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim, nama, jurusan) VALUES(?,?,?)',
        [nim, nama, jurusan],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Successfully add data", res)
        }
    });
}

//Put Data by ID
exports.updateMahasiswa = function (req, res) {
    var id = req.body.id_mahasiswa;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?', [nim, nama, jurusan, id],
        function(error, rows, fields) {
            if(error){
                console.log(error);
            }else {
                response.ok("Data successfully updated!", res)
            }
        });
}

//Delete Data by ID
exports.deleteMahasiswa = function (req, res) {
    var id = req.body.id_mahasiswa;

    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?', [id],
    function(error, rows, fields) {
        if(error){
            console.log(error);
        }else {
            response.ok("Data successfully deleted!", res)
        }
    });
}
'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/show')
        .get(jsonku.showMahasiswa);

    app.route('/show/:id')
        .get(jsonku.showMahasiswaid);
}
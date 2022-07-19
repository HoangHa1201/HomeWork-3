var fs = require('fs');
var path = require('path');

module.exports = function (direct, ext, callback) {
    ext = '.' + ext;
    fs.readdir(direct, function (err, data) {
        if (!err) {
            data.forEach(function (file) {
                if (path.extname(file) === ext) {
                    arr.push(file);
                };
            });
        }else{
            return callback(err);
        }

        return callback(null, arr);
    });
};
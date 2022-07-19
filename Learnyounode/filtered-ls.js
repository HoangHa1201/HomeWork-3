// node filtered-ls.js C:\Users\JAVIS\AppData\Roaming\npm\node_modules\learnyounode\docs-nodejs\path.html
// learnyounode verify filtered-ls.js
var fs = require('fs')
var path = require('path');

var folder = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(folder, function (err, data) {
    if(!err){
        data.forEach(function(file) {
            if (path.extname(file) === ext) {
                console.log(file);
            };
        });
    }else{
        console.log(err);
    }
});
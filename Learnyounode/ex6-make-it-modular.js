
// learnyounode verify ex6-make-it-modular.js

var moduleJS = require('./ex6-mymodule');

var direct = process.argv[2]  
var ext = process.argv[3];

moduleJS(direct, ext,(err, folder) => {
    if (!err) {
        folder.forEach(function(file) {
            console.log(file);
        });
    }else{
        console.error(err);
    }
});
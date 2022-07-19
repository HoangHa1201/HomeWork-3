// node my-first-async-io.js file://C:\Users\JAVIS\AppData\Roaming\npm\node_modules\learnyounode\docs-nodejs\fs.html

var fs = require('fs');

var file = process.argv[2];

fs.readFile(file , (err, data) => {
    if (!err) {
        var A = data.toString();
        var arrA = A.split('\n');
        var numLines = arrA.length - 1;
        console.log(numLines);
    };
});
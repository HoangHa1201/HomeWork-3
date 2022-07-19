// C:\Users\JAVIS\AppData\Roaming\npm\node_modules\learnyounode\docs-nodejs\http.html
// learnyounode verify http-file-server.js

var http = require('http');
var fs = require('fs');

var a = process.argv[2];
var b = process.argv[3];

var fileServer = http.createServer(function(c, d) {
    var stream = fs.createReadStream(b);
    stream.pipe(d);
});

fileServer.listen(a);



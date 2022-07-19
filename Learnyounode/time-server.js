// learnyounode verify time-server.js
// C:\Users\JAVIS\AppData\Roaming\npm\node_modules\learnyounode\docs-nodejs\net.html

var net = require('net');
var a = process.argv[2];

var b = (num) => {
    if (num < 10) {
        return '0' + num;
    }
    return num;
}

var timeServer = net.createServer((c) => {
    var date = new Date();
    var minute = b(date.getMinutes());
    var hour   = b(date.getHours());
    var day    = b(date.getDate());
    var year   = date.getFullYear();
    var month  = b(date.getMonth() + 1);
    var dateString = year + '-' + month + '-' + day;
    dateString = dateString + ' ' + hour + ':' + minute;
    c.end(dateString + '\n');
});

timeServer.listen(a);
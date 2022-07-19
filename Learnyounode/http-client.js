// learnyounode verify http-client.js
var http = require('http');
var url = process.argv[2];

http.get(url, (item) => {
    item.setEncoding('utf8');
    item.on('error', (err) => {
       console.error(err);
    })
    item.on('data', (data) => {
        console.log(data);
    });
});
// learnyounode verify http-collect.js
var http = require('http')
var url = process.argv[2]
var result = ''

var functionResult = () => {
    http.get(url, (value) => {
        value.on('data', function (data) {
            result += data
        })
        value.on('end', function () {
            console.log(result.length)
            console.log(result)
        })
    })
}
functionResult()
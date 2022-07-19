// learnyounode verify juggling-async.js
var http = require('http')
var bl = require('bl')
var output = []
var flag = 0

function logOuput() {
    output.forEach((value) => {
        console.log(value)
    })
}

var handleHttp = (index) => {
    http.get(process.argv[2 + index], (param) => {
        param.pipe(bl((err, data) => {
            if (!err) {
                output[index] = data.toString();
                flag++;
                if (flag === 3){
                    logOuput();
                }
            } else {
                console.error(err);
            }
        }))
    })
}

for (var i = 0; i < 3; i++) {
    handleHttp(i)
}
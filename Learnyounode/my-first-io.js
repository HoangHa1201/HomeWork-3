// Đếm số dòng trong file fs.html
// input: node my-first-io.js C:/Users/JAVIS/AppData/Roaming/npm/node_modules/learnyounode/docs-nodejs/fs.html
var fs = require('fs');
var a = fs.readFileSync(process.argv[2])
// Đọc phần tử thứ 3 của mảng process.argv-đối số đầu vào
var bufString = a.toString();
var numberLine = bufString.split('\n');
console.log(numberLine.length - 1);
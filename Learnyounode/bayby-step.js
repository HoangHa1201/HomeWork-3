// In ra tổng của input
// input: node bayby-step.js 1 2 3
var a = 0
var b=process.argv
var l=b.length
for( i = 2 ; i< l; i++){
    var y = Number(b[i])
    a = a + y
}
console.log(a)

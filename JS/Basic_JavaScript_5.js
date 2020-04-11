document.write(typeof 3);
document.write(2E310);
document.write(-3E310);
document.write(10 > 2);
document.write(10 < 2);
console.log(2 +2);
document.write("10"+5);
console.log(2 > 10)
document.write(10==10)
document.write((10-5)==10)
var a = 10
var b = 10
document.write(a === b)
var c = 1
var d = "2"
document.write(c === d)
var e = 1
var f = "1"
document.write(e === f)
var g = 1
var h = 2
document.write(5 > 10 || 10 > 5);
document.write(5 > 10 || 10 < 5);

function not_function() {
    document.getElementById("Not").innerHTML = !(20>10);
}

function not_function1() {
    document.getElementById("Not1").innerHTML = !(5>10);
}
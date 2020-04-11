function addition_function() {
    var addition = 2 + 2;
    document.getElementById("+").innerHTML = "2 + 2 =" + addition;
}

function subtraction_function() {
    var subtraction = 5 - 3;
    document.getElementById("-").innerHTML = "5 - 3 =" + subtraction;
}

function division_function() {
    var divistion = 10 / 2;
    document.getElementById("/").innerHTML = "10 / 2 =" + divistion;
}

function multiplication_function() {
    var multipication = 5 - 3;
    document.getElementById("*").innerHTML = "5 * 3 =" + multipication;
}

function multi_function() {
    var multi = (1 + 2) * 10 / 2 - 5;
    document.getElementById("*/-+").innerHTML = "(1 + 2) * 10 / 2 - 5 =" + multi;
}

function modu_function() {
    var modu = 25 % 6;
    document.getElementById("modu").innerHTML = "25 % 6 =" + modu;
}

function negation_function() {
    var negation = 10;
    document.getElementById("negation").innerHTML = -negation;
}

function INCREMENT_function() {
    var INCREMENT = 10;
    INCREMENT++;
    document.write(INCREMENT);
}

function Decrement_function() {
    var Decrement = 10;
    Decrement--;
    document.write(Decrement);
}

function zerotoone_function() {
window.alert (math.random());
}

function onetoonehundres_function() {
window.alert (math.random() * 100);
}

var n = propmpt ("Enter a number", "");
var answer = Math.sqrt(n);
alert("The sqare root of " + n + " is " + answer);
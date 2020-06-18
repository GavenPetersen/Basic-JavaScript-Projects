window.alert("Hello!");

document.write("Goodbye");

var A =("This is a string.");

document.write(A);

document.write("\"let\'s go to the park\"");

var B ="concentrated" + "string";

document.write(B);

var Family = "The Petersen\s", Dad1= "Brennan", Dad2="Gaven", Son="???";

document.write(Dad2);

document.write(Son);

var Blues ="I Have The Blues.";

document.write(Blues);

document.write(3 + 3);

// object.onpagehide = function(){myScript};
// object.addEventListener("pagehide", myScript);

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "This text has changed!";
}

var c = document.getElementById("mycanvasline");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200,100);
ctx.stroke();

var x = document.getElementById("myCanvas");
var ctx = x.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);
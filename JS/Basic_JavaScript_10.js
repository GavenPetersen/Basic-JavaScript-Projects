function Call_loop() {
    var Digit = "";
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = Digit;
}

function StringLength() {
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("String").innerHTML = n;
  }

  var Instruments = ["Guiter", "Drums", "Piano", "Base", "Violin", "Thrumpet", "Flute"];
  var Content = "";
  var Y;
  function for_Loop() {
      for (Y = 0; Y < Instruments.length; Y++) {
          Content += Instruments[Y] + "<br>";
      }
      document.getElementById("List_of_Instruments").innerHTML = Content;
  }

  function cat_pics() {
      var Cat_Picture = [];
      Cat_Picture [0] = "sleeping";
      Cat_Picture [1] = "playing";
      Cat_Picture [2] = "eating";
      Cat_Picture [3] = "purring";
      document.getElementById("Cat").innerHTML = "In this picture the cat is " +
        Cat_Picture[2] + ".";
  }

  function constant_function() {
      const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
      Musical_Instrument.color = "Blue";
      Musical_Instrument.price = "$900";
      document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
  }

  var q = 82;
  document.write(q);
  {
      let q = 33;
      document.write("<br>" + q);
  }
  document.write("<br>" + q);

  function mathpi() {
    return Math.PI;
  }
  document.getElementById("Returns1").innerHTML = mathpi();

  let car = {
      make: "Dodge ",
      model: "Viper ",
      year: "2021 ",
      color: "red ",
      description: function (){
          return "The car is a " + this.year + this.color + this.make + this.model ;
      }
  }
  document.getElementById("Car_Object").innerHTML = car.description();

    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
    }
    document.getElementById("ContinueStatement").innerHTML = text;

    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
    }
    document.getElementById("BreakStatement").innerHTML = text;
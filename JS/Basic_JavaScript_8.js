function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function Uper() {
    var str = "This is uppercase!";
    var res = str.toUpperCase();
    document.getElementById("UP").innerHTML = res;
  }

  function Search() {
    var str = "Visit Us!"; 
    var n = str.search("Us");
    document.getElementById("S").innerHTML = n;
  }

  function string_Method() {
      var X =182;
      document.getElementById("Numbers_to_string").innerHTML = X.toString();
  }

  function precision_Method() {
      var X = 12938.3012987376112;
      document.getElementById("Precision").innerHTML = X.toPrecision(10);
  }

  function toFixed() {
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("2F").innerHTML = n;
  }

  function valuof() {
    var str = "Hello World!";
    var res = str.valueOf();
    document.getElementById("vo").innerHTML = res;
  }
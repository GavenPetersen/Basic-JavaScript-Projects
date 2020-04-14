function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").Value;
    Can_ride = (Height < 52)?"You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Age_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").Value;
    Can_vote = (Age < 18)?"You are too young":"You are able to register";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jake = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Blue");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function my_function11() {
    document.getElementById("New_and_This").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Eril.Vehicle_Model +
    "manufactured in " + Erik.Vehicle_Year;
}

 function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

var myFather = new Person("John", "Doe", 50, "blue");

document.getElementById("demo").innerHTML =
"My father is " + myFather.age + "."; 
</script>
var currentAge = prompt("What is your current age?");
console.log("What is your current age? " + currentAge);

var retireAge = prompt("What age would you like to retire?");
console.log("At what age would you like to retire? " + retireAge);

var yearsLeft = (parseFloat(retireAge) - parseFloat(currentAge));
console.log("You have " + yearsLeft + " years left until you can retire.");

var thisYear = new Date().getFullYear();
var retireDate = (thisYear + yearsLeft);
console.log('It\'s ' + thisYear + ', so you can retire in ' + retireDate + '.');

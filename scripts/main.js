var currentAge = prompt("What is your current age?");
var retireAge = prompt("What age would you like to retire?");
var yearsLeft = (parseFloat(retireAge) - parseFloat(currentAge));
var thisYear = new Date().getFullYear();
var retireDate = (thisYear + yearsLeft);

// Returns current and retirement age.
console.log("What is your current age? " + currentAge);
console.log("At what age would you like to retire? " + retireAge);

// Returns remaining year/date until retirement.
if (yearsLeft > 0)	{
	console.log("You have " + yearsLeft + " years left until you can retire.");
	console.log('It\'s ' + thisYear + ', so you can retire in ' + retireDate + '.');
}
// Returns declaration of retirement.
if (yearsLeft < 0) {
	console.log('Congratulations, you can retire already.')
}
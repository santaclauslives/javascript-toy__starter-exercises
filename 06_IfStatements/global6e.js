
//So maybe an until loop until age==drivers age do

var age = parseInt(prompt("Please provide your age here: "))

var notANumber = ("Sorry, but that's not a number")
var LessThanZero = ("You haven't been born yet ");
var tooYoung = ("You can't drive yet, but you'll be able to in a few years ");
var License = ("You're eligible for a driver's license ");
var Drink = ("Please don't drink and drive ");
var Rent = ("You can rent a car ");

if (age < 0) {
  alert(LessThanZero)
}

else if (age >= 0&&age <= 15) {
alert(tooYoung)
}

else if (age >= 16 && age <= 20) {
alert(License)
}

else if (age >= 21 && age <= 24) {
alert(Drink)
}

else if (age >= 25) {
  alert(Rent)
}

else (age = isNaN) 
  alert(notANumber)





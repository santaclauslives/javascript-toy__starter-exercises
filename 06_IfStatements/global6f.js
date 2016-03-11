


var firstLength = parseInt(prompt("Please provide length of first leg: "))
var secondLength = parseInt(prompt("Please provide length of second leg: "))
var thirdLength = parseInt(prompt("Please provide length of third leg: "))
var isATriangle = ("This is a valid triangle.")
var notATriangle = ("This is not a valid triangle.");

if ((firstLength + secondLength > thirdLength) && (firstLength + thirdLength > secondLength) && (secondLength + thirdLength > firstLength)) {
  alert(isATriangle)
}

else {
  alert(notATriangle)
}


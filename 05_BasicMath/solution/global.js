//JS Atomic 05

//collect our 3 numbers from the prompt, convert to integers
var firstNum = prompt("Give me the first number");
firstNum = parseInt(firstNum);

// We could also do it this way: var firstNum = parseInt( prompt( "Give me the first number" ));
// I prefer splitting those lines up, as it enhances readability

var secondNum = prompt("Give me the second number");
secondNum = parseInt(secondNum);

var thirdNum = prompt("Give me the third number");
thirdNum = parseInt(thirdNum);

//Now some output:

alert( firstNum + " + " + secondNum + " + " + thirdNum + " = " + (firstNum + secondNum + thirdNum) );
alert( firstNum + " - " + secondNum + " - " + thirdNum + " = " + (firstNum - secondNum - thirdNum) );
alert( firstNum + " * " + secondNum + " * " + thirdNum + " = " + (firstNum * secondNum * thirdNum) );
alert( firstNum + " / " + secondNum + " = " + (firstNum / secondNum) );

alert( "Incrementing: " + firstNum + "++" );
firstNum++;
alert( "After incrementing: " + firstNum );

alert( "Decrementing: " + secondNum + "--");
secondNum--;
alert( "After decrementing: " + secondNum );
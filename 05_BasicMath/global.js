


//ask for the user input 
var firstNumber = prompt("Please enter the first number  : ");
var secondNumber = prompt("Please enter the second number : ");
var thirdNumber = prompt("Please enter the third number : ");

//convert the prompt strings to integers
firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);
thirdNumber = parseInt(thirdNumber);

//do the math for my own clarification
//added(firstNumber + secondNumber + thirdNumber);
//subtracted(firstNumber - secondNumber - thirdNumber);
//multiplied(firstNumber * secondNumber * thirdNumber);
//divided(firstNumber / secondNumber);
//incremented(firstNumber ++ );
//decremented(secondNumber --);

//output the results of the math as alerts
//Yellow is strings that will show the operation, I think. Red is concatenation. The part in parentheses after the "=" does the actual math.
alert("Added: " + firstNumber + " + " + secondNumber + " + " + thirdNumber + " = " + (firstNumber + secondNumber + thirdNumber));
alert("Subtracted: " + firstNumber + " - " + secondNumber + " - " + thirdNumber + " = " + (firstNumber - secondNumber - thirdNumber));
alert("Multiplied: " + firstNumber + " * " + secondNumber + " * " + thirdNumber + " = " + (firstNumber * secondNumber * thirdNumber));
alert("Divided: " + firstNumber + " / " + secondNumber + " = " + (firstNumber / secondNumber));
alert("Incremented: " + firstNumber + " ++ " + " = " + (firstNumber+=1 ));
alert("Decremented: " + secondNumber + " -- " + " = " + (secondNumber-=1));


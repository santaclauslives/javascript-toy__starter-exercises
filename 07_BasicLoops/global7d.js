



var startValue = parseInt(prompt("Please provide a number from which to start counting. No fractions and decimals please:  "));
var endValue = parseInt(prompt("Please provide a number at which to stop counting. No fractions and decimals please: "));


while (startValue <= endValue) {

  if ((startValue % 3 === 0) && (startValue % 5 === 0)) {
    console.log("FizzBuzz");
    startValue+=1;
  }

  else if (startValue % 3 === 0) {
    console.log("Fizz");
    startValue+=1;
  }

  else if (startValue % 5 === 0) {
    console.log("Buzz");
    startValue+=1;
  }

  else {
    console.log(startValue)
    startValue+=1;
  }
   
}

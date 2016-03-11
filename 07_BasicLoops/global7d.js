



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

//--------------------------

//var i;

//for (i = 1; i < 101; i = i + 1) {

//    listItems += "<li>";

//    if ((i % 3 === 0) && (i % 5 === 0)) {
  //      listItems += "fizzbuzz";
  //  }
//    else if (i % 3 === 0) {
//        listItems += "fizz";
//    }
 //   else if (i % 5 === 0) {
 //       listItems += "buzz";
//    }
//    else {
//        listItems += i;
 //   }
//    listItems += "</li>";









//## 7D: More Fizz

//Implement [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz). This program counts numbers as normal, except that when the number is divisible by 3, you output "Fizz", when it's divisible by 5, you output "Buzz", and when it's divisible by both 3 and 5 (e.g. 15, 30, etc.), output "FizzBuzz". Thus, you should have something that looks like this:



//Extend this by prompting the user for a start value and an end value. Use a `while` loop.
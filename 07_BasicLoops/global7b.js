

var startValue = parseInt(prompt("Please provide a number from which to start counting. No fractions and decimals please:  "))
var endValue = parseInt(prompt("Please provide a number at which to stop counting. No fractions and decimals please: "))


//var index = parseInt(prompt("Please provide length of first leg: "))


while (startValue <= endValue) {
  console.log(startValue)
  startValue+=1
}
if (startValue > endValue) {
    console.log("To continue I would have to count higher than your ending value so I am done counting now.")
}





//## 7B: More Counting

//Prompt the user for a start value and an end value. Count from the start value to the end value using a `while` loop. Make sure to account for the start-value being equal to or greater than the end-value (should it not count? Should it count down instead of up in such cases?).

//Extend this by asking the user what increment they want to count by.
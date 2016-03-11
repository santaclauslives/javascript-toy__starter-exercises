


var startValue = parseInt(prompt("Please provide a number from which to start counting. No fractions and decimals please:  "))
var endValue = parseInt(prompt("Please provide a number at which to stop counting. No fractions and decimals please: "))

for (startValue; startValue <= endValue; startValue+=1) {
  console.log(startValue)
}
if (startValue > endValue) {
    console.log("To continue I would have to count higher than your ending value so I am done counting now.")
}
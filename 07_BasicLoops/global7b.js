

var startValue = parseInt(prompt("Please provide a number from which to start counting. No fractions and decimals please:  "))
var endValue = parseInt(prompt("Please provide a number at which to stop counting. No fractions and decimals please: "))


while (startValue <= endValue) {
  console.log(startValue)
  startValue+=1
}
if (startValue > endValue) {
    console.log("To continue I would have to count higher than your ending value so I am done counting now.")
}




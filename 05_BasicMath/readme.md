# JS Atomic 05 - Basic Math

## Description

You usually don't have to do much math in front-end development, but it's important to be familiar with the mathematical operators so that in the rare occasions when you do have to do math, you're set.

## Tasks

For this atomic, you'll be writing some Javascript to accomplish the following tasks. Collect input with `prompt()`, and do output with either `alert()` or `console.log()` (pick one; if you use `console.log()`, make sure to leave instructions in the main HTML document to check the console).

In the examples below, `7` is a stand-in for the first number, `4` is a stand-in for the second number, and `12` is a stand-in for the third number. These numbers will change depending on what your user inputs, but for now consider them stand-ins. Also: note the spaces between each number and each operator. Readability is important. You can do the calculations for each statement in the output itself, or assign the result of that calculation to a variable which will be used in the output.

- Prompt the user for three numbers (make sure to parse them to integers (In Ruby, this would be accomplished with `.to_i`.), and make sure to store each in a well-named variable)
- Output the sum of the three numbers in a string like so: `7 + 4 + 12 = 23`
- Output the difference when the second and third numbers are subtracted from the first: `7 - 4 - 12 = -9`
- Output the product of the three numbers: `7 * 4 * 12 = 336`
- Output the quotient of the first number divided by the second number: `7 / 4 = 1.75`
- Output the result of incrementing the first number: `7++ = 8`
- Output the result of decrementing the second number: `4-- = 3`

## Questions

Answer these questions in the body of your HTML file once you're done with the tasks outlined above.

- What happens when you try to parse the integer out of a string like `"I am 9 years old"`? How about `"9 is my age"`? Other combinations of numbers and letters? What needs to be true about the incoming string for it to be parsed correctly?
- What happens if one (or more) of the inputs are non-numeric text (like a comma or a dollar-sign)? What errors occur, if any? What does the console output tell you?
- What questions do you have?

## Bonus

Research the [Javascript Math Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) -- can you get some of these methods to work? I'll recommend `Math.pow()`, `Math.max()`, and `Math.abs()` as starting points.
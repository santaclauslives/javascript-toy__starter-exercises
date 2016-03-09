# JS Atomic 06 - If Statements

There are actually several atomics for if-statements (which are one of the fundamental structures of programming). You'll want to complete all of them before continuing on. You'll need a separate HTML and JS file for each of these atomics -- it's up to you to decide what makes the most sense in terms of naming and organization.

Like before, answer the questions posed here in the body of the relevant HTML files.

In all of these exercises, make sure to follow proper indentation and formatting conventions.

## 6A: Relational and Equality Operators

No if-statements yet. Instead, we'll do some exploration of the relational and equality operators so you can see them at work. Use the console (and `console.log()`) to work your way through these statements by typing them exactly as you see them into your Javascript file. Before you run the code, predict the output of each statement (like I've done the first one for you).

(Note that some of the below examples use a double-equals `==` and some use a triple-equals `===`.)

- `console.log( "5 == '5' is " + (5 == '5') ); // true`
- `console.log( "5 == 'five' is " + (5 == 'five') );`
- `console.log( "5 == '6' is " + (5 == '6') );`
- `console.log( "5 === '5' is " + (5 === '5') );`
- `console.log( "5 == 2 + 3 is " + (5 == 2 + 3) );`
- `console.log( "5 == 5 is " + (5 == 5) );`
- `console.log( "5 === 5 is " + (5 === 5) );`
- `console.log( "true == 'true' is " + (true == 'true') );`
- `console.log( "true === 'true' is " + (true === 'true') );`
- `console.log( "true == false is " + (true == false) );`
- `console.log( "5 == 12 is " + (5 == 12) );`
- `console.log( "5 != 12 is " + (5 != 12) );`
- `console.log( "5 < 12 is " + (5 < 12) );`
- `console.log( "5 <= 12 is " + (5 <= 12) );`
- `console.log( "5 > 12 is " + (5 > 12));`
- `console.log( "5 >= 12 is " + (5 >= 12));`

In your HTML document, record your answers (organized by statements) and explain what the operator does. You'll want to record your guess, whether your guess was right or wrong, and, if it was wrong, why.

### Questions

- What do you call `true` and `false` values?
- How is `true` similar or dissimilar from `"true"`? Can they be used in the same way?

## 6B: Password Game

In your Javascript file, hardcode a password (e.g. `var password = "monkeybrains";` but pick your own password) Prompt the user for a password; if it matches your stored password, give them an `alert()` that says "Good job!" If it doesn't match, give them an `alert()` that says something to the effect of `"Sorry, the password is actually monkeybrains."` Make sure to use the variable storing the password instead of the string-literal that represents the password text so your program can easily change.

### Questions

- Does it matter if the user-provided password matches your password exactly, or is there some flexibility allowed in capitalization?
- Did you use `=` or `==` or `===` to compare passwords (or something else)? Why? Would any of the others work?
- Why is it a bad idea to store a password (or other sensitive information) in plain text in a Javascript file?

## 6C: Guess a Number

Pick a number and hardcode it into your program (like you did with the password above: `var secretNumber = 23;`). Prompt the user for a number, then display an alert letting the user know if their answer was correct or incorrect (much like you did with the "Password Game" atomic).

### Questions

- If you collect the user's input as a string (i.e. without using `parseInt()` to turn it into an integer), does `==` work to compare the input to the stored secret number? Would `===` work? Which is best?
- If you collect the user's input as an integer (i.e. by using `parseInt()` to turn it into an integer), can you use `==` to compare? `===`? Which is better in this case?
- What is the difference between `==` and `===`?
- In this case, does it make more sense to leave the user's guess as a string, or to convert it to an integer? Why? What are the relative advantages / disadvantages of each approach (particularly in terms of the types of new features that might be able to be added)?

## 6D: Driver's Ed, Part 1

Prompt the user for their age and store it in a variable, then display any and all applicable messages below:

- **Age 25 and older**: "You can rent a car"
- **Age 21 and older**: "Please don't drink and drive"
- **Age 16 and older**: "You're eligible for a driver's license"
- **Age 0 - 15**: "You can't drive yet, but you'll be able to in a few years"
- **Any negative number**: "You haven't been born yet"
- **NaN**: "Sorry, but that's not a number"

For example, if I am 27, I should get the messages for 16, 21, and 25. If I am 23, I should get the messages for 16 and 21, but not 25, 0, or negative.

These messages can be displayed as alerts or as logs to the console.

You will not need to use `else` or `else if` in this exercise.

### Questions

- Does it matter what order your if-statements are in?
- When testing ranges, did you use `&&`, `||`, or something else entirely (e.g. nested if-statements)? If you used `&&`, why is that a better choice than `||` (and vice-versa)?
- What types of input produce a value of `NaN` after parsing? Is it important to check for `NaN` values? Is it possible for a `NaN` value to trigger any of the other if-statements? If so, how and why?
- What questions do you have?

## 6E: Driver's Ed, Part 2

This exercise is pretty similar to Part 1, but in this case you'll *only display one message* depending on the range your user's age falls into:

- **Age 25 and older**: "You can rent a car"
- **Age 21 - 24**: "Please don't drink and drive"
- **Age 16 - 20**: "You're eligible for a driver's license"
- **Age 0 - 15**: "You can't drive yet, but you'll be able to in a few years"
- **Any negative number**: "You haven't been born yet"
- **NaN**: "Sorry, but that's not a number"

All of your program logic (i.e. the part that decides which output to display) should be contained in a single `if` / `else if` / `else` block, rather than in separate `if` statements.

### Questions

- Does it matter what order your `if` / `else if` statements happen? If you reorder them, does your program still produce correct output?
- What's wrong with this conditional: `if (age < 16 && age > 21)`?
- Let's say that your program needs to be easy to modify so that it works in parts of the country/world where the age ranges are different. How would you replace the numbers in your `if` statements with variables to make the program make sense? Or is it easier to just have the numbers be there? Does it matter?

## 6F: Triangles

For all triangles, the sum of the lengths of any two sides must be greater than the length of the third side. For example: a triangle of 3, 4, 5 (in whatever units you want) is valid (since `3 + 4 > 5`, `3 + 5 > 4`, and `4 + 5 > 3`), whereas a triangle of 3, 4, 7 is not (since `3 + 4` is not greater than `7`).

![](http://cl.ly/brne/triangle-inequality-demonstration2.png)

![](http://cl.ly/brHB/tumblr_inline_mlryndqmmW1qio24w.png)

Write a program which prompts your user for the lengths of the 3 legs of a triangle (this input can be an integer or a floating point number, but it can't be a string), and which then reports whether this is a valid triangle. It's probably worthwhile to output the results of your behind-the-scenes calculations to the console, but the ultimate output ("This is a valid triangle" or "This is not a valid triangle" should be handled with an alert).

### Questions

Don't start on these questions (or even read them) until after you've written the code for **6F**. For these questions, first make (and record) your prediction, then test it, then write down what actually happened when you tested this. By the end, you'll probably have a list of at least a few errors. Go back and fix them; make one git commit per correction.

- What happens if one (or more) of the lengths aren't input correctly and thus end up as `NaN`?
- What happens if one of the lengths of the triangle is `0`? Two of the lengths? All three lengths?
- What happens if the user inputs one or more negative integers for the lengths of the triangle's legs?

Assuming errors exist, note that all of these errors come from the user inputting one or more invalid values. What are some strategies you might use to prevent this from happening (or at least to prevent those invalid values from being used)?

### Bonuses

These are some optional extensions to the exercise.

- *Equilateral* triangles are triangles where all three legs have the same length. Your program should output (however you want) whether the triangle is equilateral.
- *Scalene* triangles have no sides that are the same length. Your program should output whether the triangle in question is scalene.
- *Isosceles* triangles have at least two legs that are the same length (Fun Fact: all equilateral triangles are also isosceles triangles). Your program should output whether the triangle is isosceles.
- *Right* triangles follow the pattern **a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>** (where **c** is the longest leg, called the *hypotenuse*). Your program should output whether the triangle in question is a right triangle. A triangle can be *right* and *scalene*, or *right* and *isosceles*. A triangle <u>cannot</u> be *right* and *equilateral*. There are a couple of ways to do this, both with and without methods from the *Math* object.
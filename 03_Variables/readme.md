# JS-Atomic 03: Variables and Data Types

Now that you can do output, it's time to start working with data and data types. In this atomic we'll just worry about *integers* and *strings* (later, we'll add on *booleans*, *floats*, *functions*, and *objects*).

There are two goals for this Atomic:

1. Learn to create, assign value to, and use variables
2. Do output that mixes string literals with variables using concatenation

Create a file called **index.html** (use the starter code below if you want) and a file called **global.js**.

With Javascript, you'll want to:

1. Create three variables: `name`, `age`, and `hairColor`
2. Assign to each of those variables some reasonable value (for example, my `name` is "Andrew", my `age` is 29, and my `hairColor` is "Bright Pink") -- I don't care if you use your own information, that of a fictional character (or a cat!), or some mix thereof. `age` should be an integer (like `29`, not `"29"`); the other variables should be strings.
3. Do three `alert()` statements, with output formatted like so:
  - My name is Andrew.
  - My age is 29.
  - My hair color is Bright Pink.
  - (Note how the values for each of these match the values I provided in step 2 exactly. Also: pay attention to whitespace and formatting).
4. Make sure that the output statements you create in the previous step use the actual variables. Don't merely type out the same values again.
5. Once you've gotten it working, change the values you assign to your variables (don't change the output statements at all), and see how your program changes as you run it. See what happens if you use `console.log()` instead of `alert()`. See what happens if you change `age` to be a string instead of an integer (e.g. to `"29"` instead of `29`).

Once you're done with this, answer the following questions, formatted however you want in the body of your *index.html* file. (It might make sense to format them like you did for the questions in the "Output" section before this one.)

1. Why don't you need to use the `var` keyword every time you use a variable (right now, we only use it when we create the variable)? What does `var` do?
2. What happens if you try to do output with a variable without first assigning a value to that variable? What happens? Does the program still work as intended? Do error messages show up in the console? If so, what error message?
3. What questions do you have?

---

## index.html

```html
<!doctype HTML>
<html>
<head>
  <title>JS Atomic 03</title>
  <!-- Include your external Javascript file here -->
</head>
<body>
  <h1>JS Atomic 03</h1>
  <!-- Answer the 3 questions above here -->
</body>
</html>
```
# JS Atomic 08 - Input Validation Loops

## 8A: What's the Password?

Create a secret password (hard-code it as a string). Prompt the user for the password. Keep prompting until they correctly input the password, then congratulate them on a job well done. This is effectively a redo of Atomic JS-06B.

### Questions

- What does this program look like if done with a `while` loop? With a `for` loop? Which is better?
- Did you use `==` or `===`? Does it matter?

### Bonuses

- Change the password so that it is case-insensitive (e.g. if the password is "DogsAreCool", accept even if I type "dogsarecool" or "DoGsArECoOl"). How did you do this?
- Tell the user how many guesses it took for them to guess correctly.

## 8B: Guess the Number

Tell the user that you're thinking of a number between 1 and 100 (go ahead and hard-code this number). Prompt the user to guess the number (and keep asking them if they get it wrong), then congratulate them when they guess correctly. This is a re-do of Atomic JS-06C.

You can make up your own bonuses for this one.

## 8C: Home on the Range

Prompt the user for a number within 1 and 8, and keep prompting so long as they keep giving you good numbers. Stop prompting once they give you numbers outside of that range.

As a bonus, display an `alert` at the end with the average of the numbers they gave you.

## 8D: Triangles, Pt 2

Re-do Atomic JS-06F. Prompt the user for all 3 legs of a triangle, then prompt again (for all three legs) if the triangle is not valid.
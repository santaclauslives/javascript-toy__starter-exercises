



var password = "8reindeer"
var guess = prompt("Guess the password: ")
counter = 1

for (counter = 1; counter <= 3; counter+=1) {

  if (guess === password) {
      alert("Well done!");
  }

  else (guess != password) {
    alert("Hint: The password is: " + password + " . ");
    alert(guessEasy = prompt("Guess the password: "));

  }
}






//## 8A: What's the Password?

//Create a secret password (hard-code it as a string). Prompt the user for the password. Keep prompting until they correctly input the password, then congratulate them on a job well done. This is effectively a redo of Atomic JS-06B.
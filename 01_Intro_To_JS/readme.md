# JS-Atomic 01: Intro to JS

You'll do just a tiny bit of actual programming in this atomic: I've provided some Javascript, some HTML, and some CSS. Your job is to stitch 'em all together. Each should live in its own file. The `<link>` to include the CSS into the HTML, and then `<script>` to include the Javascript. If you want to copy/paste, that's encouraged for now.
  
No need to understand what's happening in the Javascript. Do read through it and see what you can understand, but don't feel bad if you don't understand much, or even anything.

No need to think critically about the CSS at all.

---

First, you'll need create the files below as specified. Copy the code verbatim into files names as indicated.

Save this HTML as **index.html**:

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Tic-Tac-Toe</title>
  <meta name="description" content="">
  <link rel="stylesheet" type="text/css" href="global.css">
  
  <!-- Now use the <script> tag to include the javascript in ttt.js -->

</head>

<body>
  <h1>Tic-Tac-Toe</h1>
  
  <h2 id="turn-tracker">Player X, it's your move!</h2>
  
  <table id="the_board">
    <tr>
      <td class="0">-</td>
      <td class="1">-</td>
      <td class="2">-</td>
    </tr>
    
    <tr>
      <td class="3">-</td>
      <td class="4">-</td>
      <td class="5">-</td>
    </tr>
    
    <tr>
      <td class="6">-</td>
      <td class="7">-</td>
      <td class="8">-</td>
    </tr>
  </table>
  
</body>
</html>
```

Save this CSS as **global.css**:

```css
body{
  text-align: center;
}

#the_board{
  margin: 0 auto;
}

h1 {
  font-size: 500%;
}

td{
  font-family: monospace;
  background: #eeeeee;
  padding: 50px;
  font-size: 300%;
}

td:hover{
  background: #cccccc;
}

td.X {
  background: #EDFFED;
}

td.O {
  background: #FFEDED;
}
```

And save this Javascript as **global.js**:

```javascript
window.onload = function(){
  
  // Collection of all squares on the board.
  var squares = document.getElementsByTagName('td');
  
  var turn = "X";
  var turnCounter = 0;
  var message = "Player X, it's your move!";
  
  //fires after addMark(); switches the turn, updates the number of turns that have elapsed
  //and then calls the tracker().
  function switchTurn() {
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
    turnCounter++;
    tracker();    
  }
  
  //updates the H2 that tells players whose turn it is (or if the game is over)
  //also tracks who won, who hasn't yet won
  function tracker() {
    var a = document.getElementById("turn-tracker");
    var msg = determineWinner();
    
    if (msg === "X") {
      message = "Player X wins!";
      gameOver();
    }
    else if (msg === "O") {
      message = "Player O wins!";
      gameOver();
    }
    else if (turnCounter < 9) {
      message = "Player " + turn + ", it's your move!";
    } 
    else {
      message = "Game over!";
      gameOver();
    } 
    a.innerHTML = message;
  }
  

  //returns "X" if player X wins, "O" if player O wins, or "" if no one wins.
  function determineWinner() {
    var m = "";
    //left column
    if (squares[0].className == squares[3].className && squares[3].className == squares[6].className) {
      m = squares[0].className;
    } //middle column
    else if (squares[1].className == squares[4].className && squares[4].className == squares[7].className) {
      m = squares[1].className;
    } //right column
    else if (squares[2].className == squares[5].className && squares[5].className == squares[8].className) {
      m = squares[2].className;
    } //top row
    else if (squares[0].className == squares[1].className && squares[1].className == squares[2].className) {
      m = squares[1].className;
    } //middle row
    else if (squares[3].className == squares[4].className && squares[4].className == squares[5].className) {
      m = squares[3].className;
    } //bottom row 
    else if (squares[6].className == squares[7].className && squares[7].className == squares[8].className) {
      m = squares[6].className;
    } //diagonal-1 
    else if (squares[0].className == squares[4].className && squares[4].className == squares[8].className) {
      m = squares[0].className;
    } //diagonal 2
    else if (squares[2].className == squares[4].className && squares[4].className == squares[6].className) {
      m = squares[2].className;
    } //no winner 
    else {
      // no winner
    }
    
    return m;
  }
  
  function gameOver() {
    for(var i = 0; i < squares.length; i++) {
      squares[i].removeEventListener("click", addMark);
    }
  }

  
  //defines the add_mark method
  function addMark(){
    this.innerHTML = turn;
    this.className = turn;
    
    //switch from X to O and do other housekeeping
    switchTurn();
    
    //remove the event listener so the square can't be clicked again
    this.removeEventListener("click", addMark);
  }
  
  // provides add_mark() method / listener to each square
  for(var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", addMark);
  }

}
```

---

Now, make it work! Again, you won't need to do much coding at all for this. Just link the files together.

View the page by typing `open ~/Code/javascript-toy__starter-exercises/01_Intro_To_JS/index.html` into terminal. (You can also double-click the **index.html** file from inside a Finder window.)

Once you have a working and styled Tic-Tac-Toe game, you are ready for the next atomic.
let x = Math.floor((Math.random() * 10) + 1);
let y = Math.floor((Math.random() * 10) + 1);

function sum(a, b) {
  return a + b
}

function difference(a, b) {
  if (a > b) {
    return a - b
  } else
  return (b - a)
}


const hints = ["images/one.png", "images/two.png", "images/three.png", "images/four.png", "images/five.png", "images/six.png", "images/seven.png", "images/eight.png", "images/nine.png", "images/ten.png"]
const plus = {string:"+", img:"images/plus.png"}
const minus = {string:"-", img:"images/minus.png"}
const operations = [plus, minus]
var op;
var nums;
var streak = 0;

function start() {
  document.querySelector(".start").style.display = "none";
  generateProblem();
}

function generateProblem() {
  op = operations[Math.floor(Math.random()*operations.length)]; //grabs plus or minus
  nums = [x, y];
  nums.sort(function(a, b){return a - b}); //sorts the numbers so I can get the bigger one first
  document.getElementById("equation").innerHTML = `${nums[1]} ${op.string} ${nums[0]} = ` //print the equation
}

function calculate() { //when Enter is clicked
  var answer = document.getElementsByName("answer")[0].value; //gets the submitted answer
  var correctAns;
  //set correct answer, depending on the operation
  if (op == plus) {
    correctAns = sum(x, y)
  } else {
    correctAns = difference(x, y)
  }

  if (answer == correctAns) {
    document.getElementById("result").innerHTML = "Congratulations, that is correct!";
    //hide the enter button and show the reset button
    document.getElementById("nextRound").style.display = "inline-block";
    document.getElementById("enter").style.display = "none";
    streak++ //increase the streak counter
  }
  else {
    document.getElementById("result").innerHTML = `So close! Try again`;
    streak = 0 //reset streak to 0
  }
}

function nextRound() { //when nextRound is clicked
  document.getElementById('answer').value = '' //empty the form
  document.getElementById("result").innerHTML = ""; //emptys the result space
  document.getElementById("nextRound").style.display = "none"; //hides nextRound button
  document.getElementById("enter").style.display = "inline-block"; //show the enter button
  document.getElementById("hint").style.display = "inline-block"; //show the hint button
  //reset x and y
  x = Math.floor((Math.random() * 7) + 1);
  y = Math.floor((Math.random() * 7) + 1);
  document.querySelector(".grid").style.display = "none"; //hide hint display
  generateProblem(); //create a new equation
}

function showHint() {
  /*Displays the "Hints" section
  Hides the Hint button
  and grabs the right images from the hints array
  And displays them with the bigger number (nums[1]) first*/
  document.querySelector(".grid").style.display = "block";
  document.getElementById("hint").style.display = "none";
  document.getElementById("x").src = hints[nums[1] - 1];
  document.getElementById("op").src = op.img;
  document.getElementById("y").src = hints[nums[0] - 1];

}

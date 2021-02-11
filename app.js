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
const correctResult = ['Way to go!', 'Great job!', 'Congratulations, that\'s right!', 'Woohoo!', 'Awesome!']
const wrongResult = ['Sorry, try again', 'So close!', 'Not quite', 'Almost!']
var op;
var nums;
var playerName;


function start() {
  playerName = document.getElementsByName("playerName")[0].value;
  document.querySelector(".fullPage").style.display = "none";
  generateProblem();
  document.getElementById("answer").select();
}


function generateProblem() {
  op = operations[Math.floor(Math.random()*operations.length)]; //grabs plus or minus
  nums = [x, y];
  nums.sort(function(a, b){return a - b}); //sorts the numbers so I can get the bigger one first
  document.getElementById("equation").innerHTML = `${nums[1]} ${op.string} ${nums[0]} = `;//print the equation
}

var distance = 0;

function calculate() { //when Enter is clicked
  var answer = document.getElementsByName("answer")[0].value; //gets the submitted answer
  var correctAns;
  if (op == plus) {
    correctAns = sum(x, y)
  } else {
    correctAns = difference(x, y)
  }

  if (answer == correctAns) {
    document.getElementById("result").innerHTML = correctResult[Math.floor(Math.random()*correctResult.length)];
    document.querySelector(".hint").style.display = "none";
    distance += 85;
  }
  else {
    document.getElementById("result").innerHTML = wrongResult[Math.floor(Math.random()*wrongResult.length)];
    if(distance > 0){
    distance -= 85;
  }
  }
  document.getElementById("rocket").style.left=`${distance}px`

  if (distance == 850) {
  document.getElementById("success").style.display="block";
  document.getElementById("name").innerHTML="Congratulations "+ playerName
  }
  document.getElementById('answer').value = '' //empty the form

  if (answer == correctAns) {
    nextRound();
  }

  document.getElementById("answer").select();
}

function nextRound() {
  x = Math.floor((Math.random() * 7) + 1);
  y = Math.floor((Math.random() * 7) + 1);
  document.getElementById("hint").style.display = "inline-block";
  generateProblem();
}

function showHint() {
  /*Displays the "Hints" section
  Hides the Hint button
  and grabs the right images from the hints array
  And displays them with the bigger number (nums[1]) first*/
  document.querySelector(".hint").style.display = "block";
  document.getElementById("hint").style.display = "none";
  document.getElementById("x").src = hints[nums[1] - 1];
  document.getElementById("op").src = op.img;
  document.getElementById("y").src = hints[nums[0] - 1];
}

function newGame() {
  playerName = "";
  distance = 0;
document.getElementById("rocket").style.left=`${distance}px`
  document.getElementById("startPage").style.display = "block";
  document.getElementById("success").style.display = "none";
  document.getElementById('playerName').value = ''
  nextRound();

}

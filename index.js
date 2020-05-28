// detecting button

var no0fButtons = document.querySelectorAll(".drum").length;
// adding eventlistener  to all the buttons
for (var i = 0; i < no0fButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", clickMe);
}

function clickMe() {
  // to check which button was pressed
  var buttonInnerhtml = this.innerHTML;
  keyMouse(buttonInnerhtml);
  buttonAnimation(buttonInnerhtml);
}

// detecting keypress

document.addEventListener("keydown", keyPress);

function keyPress(event) {
  keyMouse(event.key);
  buttonAnimation(event.key);
}

// to play sound

function keyMouse(expression) {
  switch (expression) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var crash = new Audio("sounds/kick-bass.mp3");
      crash.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

  }
}

// button animation

function buttonAnimation(keys)
{
  var activeButton = document.querySelector("."+keys);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100)
}

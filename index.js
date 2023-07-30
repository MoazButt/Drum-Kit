var drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", handleClick);
}

document.addEventListener("keydown", makeSound);

function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  handleKey(buttonInnerHTML);
  makeAnimation(buttonInnerHTML);
}

function makeSound(event) {
  var key = event.key;
  handleKey(key);
  makeAnimation(key);
}

function handleKey(key) {
  switch (key) { // Fix the parameter name here
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
      var tom4 = new Audio("sounds/tom-4.mp3"); // Fix the audio file name here
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log("Key not mapped to a sound.");
  }
}

function makeAnimation(currKey){
   var actvButton = document.querySelector("."+currKey);
   actvButton.classList.add("pressed");
   setTimeout(function(){actvButton.classList.remove("pressed");},100);
}

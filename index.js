var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var visualizer = document.getElementById("visualizer");

// Add click listeners to buttons
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    toggleVisualizer();
  });
}

// Add keypress listener
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
  toggleVisualizer();
});

// Function to play sound
function makeSound(key) {
  switch (key) {
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
      console.log(key);
  }
}

// Function to animate button press
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}

// Function to toggle visualizer
function toggleVisualizer() {
  if (visualizer.classList.contains("active")) {
    visualizer.classList.remove("active");
    visualizer.innerHTML = ""; // Clear visualizer
  } else {
    visualizer.classList.add("active");
    visualizer.innerHTML = ""; // Reset visualizer
    for (let i = 0; i < 10; i++) {
      const bar = document.createElement("div");
      visualizer.appendChild(bar);
    }
  }
}



const sounds = {
  w: "./sounds/tom-1.mp3",
  a: "./sounds/tom-2.mp3",
  s: "./sounds/tom-3.mp3",
  d: "./sounds/tom-4.mp3",
  j: "./sounds/snare.mp3",
  k: "./sounds/crash.mp3",
  l: "./sounds/kick-bass.mp3",
};

function playSound(key) {
  const soundPath = sounds[key.toLowerCase()];

  if (!soundPath) return;

  const audio = new Audio(soundPath);

  audio.play().catch(function (error) {
    console.error("Audio playback failed:", soundPath, error);
  });
}

// Play sound when a drum button is clicked
document.querySelectorAll(".drum").forEach(function (button) {
  button.addEventListener("click", function () {
    const key = button.textContent.trim().toLowerCase();

    playSound(key);
    buttonAnimation(key);
  });
});

// Play sound when a keyboard key is pressed
document.addEventListener("keydown", function (event) {
  if (event.repeat) return;

  const key = event.key.toLowerCase();

  playSound(key);
  buttonAnimation(key);
});

// Button animation
function buttonAnimation(key) {
  const activeButton = document.querySelector("." + key);

  if (!activeButton) return;

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

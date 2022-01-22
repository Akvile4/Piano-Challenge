//declare a variable and get element of audio by ID
const soundA = document.getElementById('audioA');
const buttonA = document.getElementById('buttonA');
const soundS = document.getElementById('audioS');
const buttonS = document.getElementById('buttonS');
const soundD = document.getElementById('audioD');
const buttonD = document.getElementById('buttonD');
const soundF = document.getElementById('audioF');
const buttonF = document.getElementById('buttonF');
const soundG = document.getElementById('audioG');
const buttonG = document.getElementById('buttonG');
const soundH = document.getElementById('audioH');
const buttonH = document.getElementById('buttonH');
const soundJ = document.getElementById('audioJ');
const buttonJ = document.getElementById('buttonJ');

//use the event listner method to target element by click
buttonA.addEventListener('click', () => {
  soundA.pause();
  soundA.currentTime = 0;
  soundA.volume = 0.3;
  soundA.play();
});
buttonS.addEventListener('click', () => {
  soundS.pause();
  soundS.currentTime = 0;
  soundS.volume = 0.3;
  soundS.play();
});
buttonD.addEventListener('click', () => {
  soundD.pause();
  soundD.currentTime = 0;
  soundD.volume = 0.3;
  soundD.play();
});
buttonF.addEventListener('click', () => {
  soundF.pause();
  soundF.currentTime = 0;
  soundF.volume = 0.3;
  soundF.play();
});
buttonG.addEventListener('click', () => {
  soundG.pause();
  soundG.currentTime = 0;
  soundG.volume = 0.3;
  soundG.play();
});
buttonH.addEventListener('click', () => {
  soundH.pause();
  soundH.currentTime = 0;
  soundH.volume = 0.3;
  soundH.play();
});
buttonJ.addEventListener('click', () => {
  soundJ.pause();
  soundJ.currentTime = 0;
  soundJ.volume = 0.3;
  soundJ.play();
});


document.addEventListener("keypress", (event) => {
  if (event.key == "a") {
    const keySound = document.getElementById("audioA");
    keySound.volume = 0.3;
    keySound.play();
  }
});
document.addEventListener("keypress", (event) => {
  if (event.key == "s") {
    const keySound = document.getElementById("audioS");
    keySound.volume = 0.3;
    keySound.play();
  }
});
document.addEventListener("keypress", (event) => {
  if (event.key == "d") {
    const keySound = document.getElementById("audioD");
    keySound.volume = 0.3;
    keySound.play();
  }
});
document.addEventListener("keypress", (event) => {
  if (event.key == "f") {
    const keySound = document.getElementById("audioF");
    keySound.volume = 0.3;
    keySound.play();
  }
});
document.addEventListener("keypress", (event) => {
  if (event.key == "g") {
    const keySound = document.getElementById("audioG");
    keySound.volume = 0.3;
    keySound.play();
  }
});
document.addEventListener("keypress", (event) => {
  if (event.key == "h") {
    const keySound = document.getElementById("audioH");
    keySound.volume = 0.3;
    keySound.play();
  }
});
document.addEventListener("keypress", (event) => {
  if (event.key == "j") {
    const keySound = document.getElementById("audioJ");
    keySound.volume = 0.3;
    keySound.play();
  }
});

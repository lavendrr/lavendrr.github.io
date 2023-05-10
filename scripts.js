// This is a P5 port of my Processing audio visualizer from earlier in the semester. I didn't copy the comments, but it functions essentially the same, albeit without the options for different palettes or shapes.

let mySound;
let amp;
let mic;

let delaycounter = 0;
let increment = false;

let thresh = 0.1;
let sizemult = 400;
let delay = 15;

function preload() {
  soundFormats('mp3');
  mySound = loadSound('https://cdn.freesound.org/previews/686/686020_1954411-lq.mp3');
}

function setup() {
  createCanvas(1000, 1000);
  background(200, 200, 255);

  amp = new p5.Amplitude();
  amp.setInput(mySound);

}

function draw() {
  noStroke();
  fill(200, 200, 255);
  rect(350, 350, 300, 300);

  stroke(0);
  fill(amp.getLevel() * 255, 0, 255 - amp.getLevel() * 255);

  ellipse(500, 500, amp.getLevel() * sizemult + 100, amp.getLevel() * sizemult + 100);

  if (amp.getLevel() > thresh && delaycounter === 0) {
    fill(random(255), random(255), random(255));

    let rectx = random(25, 925);
    let recty = random(25, 925);

    while (
      (rectx > 300 && rectx < 650) ||
      (recty > 300 && recty < 650)
    ) {
      rectx = random(25, 925);
      recty = random(25, 925);
    }

    rect(rectx, recty, 50, 50);

    increment = true;
  }

  if (increment) {
    if (delaycounter !== delay) {
      delaycounter++;
    } else {
      delaycounter = 0;
      increment = false;
      background(200, 200, 255);
    }
  }
}

function togglePlay() {
  if (mySound.isPlaying() ){
    mySound.pause();
  } else {
    mySound.loop();
		amp = new p5.Amplitude();
		amp.setInput(mySound);
  }
}

////////// Button/Image changer below

let img = document.getElementById("elevator");
let button1 = document.getElementById("button1");

function openClose() {

    if (img.getAttribute('src') == "https://i.imgur.com/kV0v3wY.png") {
        img.setAttribute('src', "https://i.imgur.com/2u658F0.png");
    }
    else {
        img.setAttribute('src', "https://i.imgur.com/kV0v3wY.png");
    }
}

button1.addEventListener("click", openClose);
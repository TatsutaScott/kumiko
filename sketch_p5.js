function setup() {
  createCanvas(600, 690);
  noLoop();
}

function draw() {
  background(255);
}

function screenShot() {
  const now = Date.now();
  saveCanvas(`${now}_kumiko.png`);
}

function setup() {
  createCanvas(600, 690);
  noLoop();
}

function draw() {
  background(255);
  // screenShot();
}

function screenShot() {
  const now = Date.now();
  saveCanvas(`${now}_mikadotsunagi.png`);
}

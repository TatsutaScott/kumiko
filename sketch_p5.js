function setup() {
  createCanvas(600, 690);
  noLoop();
}

function draw() {
  background(255);
  // Pattern.hexagon(yaeasa, width / 2, height / 2, 50, 0);
  // Pattern.pattern(yaeasa, 0, 0, width, height, 2, 0);
  // screenShot("tsunoasanoha");
}

function screenShot(tag) {
  const now = Date.now();
  saveCanvas(`${now}_${tag}.png`);
}

function helper_point(vec, clr) {
  push();
  noStroke();
  fill(clr);
  circle(vec.x, vec.y, 5);
  pop();
}

function tsunoasanoha(x, y) {}

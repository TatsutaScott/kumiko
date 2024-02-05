function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background(240);
  // Pattern.hexagon(tsunoasanoha, width / 2, height / 2, 50, 0);
  strokeWeight(1.5);

  Pattern.pattern(
    mikadotsunagi,
    width / 5,
    height * (2 / 7),
    width / 2,
    height / 2,
    2,
    0
  );

  screenShot("mikadotsunagi_swatch");
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

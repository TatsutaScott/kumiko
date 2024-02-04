function setup() {
  createCanvas(600, 690);
  noLoop();
}

function draw() {
  background(255);
  // shippouasanoha(width / 2, height / 2, 50, 0, 0.5);
  // Pattern.hexagon(shippouasanoha, width / 2, height / 2, 50, 0);
  Pattern.pattern(shippouasanoha, 0, 0, width, height, 2, 0);
  // screenShot("shippouasanoha");
}

function screenShot(tag) {
  const now = Date.now();
  saveCanvas(`${now}_${tag}.png`);
}

function setup() {
  createCanvas(600, 690);
  noLoop();
}

function draw() {
  background(255);
  Pattern.pattern(kikyouasanoha, 0, 0, width, height, 2, 0);
  // screenShot("kikyouasanoha");
}

function screenShot(tag) {
  const now = Date.now();
  saveCanvas(`${now}_${tag}.png`);
}

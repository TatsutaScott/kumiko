function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background(240);
  // Pattern.hexagon(bentenkikkou, width / 2, height / 2, 50, 0);
  strokeWeight(1.5);

  Pattern.pattern(
    kawariasanoha,
    width / 5,
    height * (2 / 7),
    width / 2,
    height / 2,
    2,
    0
  );
  // kawariasanoha(width / 2, height / 2, 50, 0);
  // screenShot("kawariasanoha_swatch");
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

/**Draws the most basic element of the kawariasanoha pattern
 * @param {Number} x - x coord of the center of the triangle
 * @param {Number} y - y coord of the center of the triangle
 * @param {Number} rad - 'radius' of the triangle. distance from the center to a point
 * @param {Number} rot - rotation of the triangle in radians
 * @param {Number} inner_ratio - spacing of the intersection points (0, 1) from outside to center
 */
function kawariasanoha(x, y, rad, rot, inner_ratio = 0.5) {
  const center = createVector(0, 0);
  const points = [];
  const midpoints = [];
  const intersections = [];

  push();
  translate(x, y);
  rotate(rot);

  for (let i = 0; i < 3; i++) {
    points.push(p5.Vector.fromAngle(i * (TAU / 3)).setMag(rad));
  }

  for (let i = 0; i < 3; i++) {
    midpoints.push(p5.Vector.lerp(points[i], points[next(i, 3)], 0.5));
    intersections.push(p5.Vector.lerp(midpoints[i], center, inner_ratio));
  }

  for (let i = 0; i < 3; i++) {
    line(points[i].x, points[i].y, points[next(i, 3)].x, points[next(i, 3)].y);
    line(points[i].x, points[i].y, intersections[i].x, intersections[i].y);
    line(
      points[next(i, 3)].x,
      points[next(i, 3)].y,
      intersections[i].x,
      intersections[i].y
    );
    line(
      intersections[i].x,
      intersections[i].y,
      intersections[next(i, 3)].x,
      intersections[next(i, 3)].y
    );
  }

  pop();
}

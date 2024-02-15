function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background(240);
  // Pattern.hexagon(bentenkikkou, width / 2, height / 2, 50, 0);
  strokeWeight(1.5);

  Pattern.pattern(
    sakura,
    width / 5,
    height * (2 / 7),
    width / 2,
    height / 2,
    2,
    0
  );
  // sakura(width / 2, height / 2, 50, 0);
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

/**Draws the most basic element of the asanoha pattern
 * @param {Number} x - x coord of the center of the triangle
 * @param {Number} y - y coord of the center of the triangle
 * @param {Number} rad - 'radius' of the triangle. distance from the center to a point
 * @param {Number} rot - rotation of the triangle in radians
 * @void
 */
function sakura(x, y, rad, rot, cross = 0.125) {
  const points = [];
  const inner_points = [];
  const cross_points = [];

  for (let i = 0; i < 3; i++) {
    points.push(p5.Vector.fromAngle(i * (TAU / 3)).setMag(rad));
    inner_points.push(
      p5.Vector.lerp(points[i], createVector(0, 0), cross * 2.5)
    );
  }

  for (let i = 0; i < 3; i++) {
    const X = [];
    X.push(p5.Vector.lerp(points[i], points[next(i, 3)], cross));
    X.push(p5.Vector.lerp(points[i], points[next(i, 3)], cross * 2));
    X.push(p5.Vector.lerp(points[i], points[next(i, 3)], 1 - cross * 2));
    X.push(p5.Vector.lerp(points[i], points[next(i, 3)], 1 - cross));
    cross_points.push(X);
  }

  push();
  translate(x, y);
  rotate(rot);
  fill(240);

  beginShape();
  for (let p of points) {
    // helper_point(p, "blue");
    vertex(p.x, p.y);
  }
  endShape(CLOSE);

  for (let i = 0; i < 3; i++) {
    line(
      cross_points[i][0].x,
      cross_points[i][0].y,
      cross_points[prev(i, 3)][3].x,
      cross_points[prev(i, 3)][3].y
    );
    line(
      cross_points[i][1].x,
      cross_points[i][1].y,
      cross_points[prev(i, 3)][2].x,
      cross_points[prev(i, 3)][2].y
    );
    line(inner_points[i].x, inner_points[i].y, 0, 0);
  }

  pop();
}

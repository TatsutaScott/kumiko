/**Draws the most basic element of the mikadotsunagi pattern
 * @param {Number} x - x coord of the center of the triangle
 * @param {Number} y - y coord of the center of the triangle
 * @param {Number} rad - 'radius' of the triangle. distance from the center to a point
 * @param {Number} rot - rotation of the triangle in radians
 * @param {number} [lo=1 / 3]
 * @param {number} [hi=2 / 3]
 * @void
 */
function mikadotsunagi(x, y, rad, rot, lo = 1 / 3, hi = 2 / 3) {
  const corners = [];
  const thirds = [];
  const two_thirds = [];

  for (let i = 0; i < 3; i++) {
    corners.push(p5.Vector.fromAngle(i * (TAU / 3)).setMag(rad));
  }

  for (let i = 0; i < 3; i++) {
    const next = (i + 1) % 3;
    thirds.push(p5.Vector.lerp(corners[i], corners[next], lo));
    two_thirds.push(p5.Vector.lerp(corners[i], corners[next], hi));
  }

  push();
  translate(x, y);
  rotate(rot);

  for (let i = 0; i < 3; i++) {
    const next = (i + 1) % 3;
    line(corners[i].x, corners[i].y, corners[next].x, corners[next].y);
    line(thirds[i].x, thirds[i].y, two_thirds[next].x, two_thirds[next].y);
  }

  pop();
}

/**Draws the most basic element of the asanoha pattern
 * @param {Number} x - x coord of the center of the triangle
 * @param {Number} y - y coord of the center of the triangle
 * @param {Number} rad - 'radius' of the triangle. distance from the center to a point
 * @param {Number} rot - rotation of the triangle in radians
 * @void
 */
function asanoha(x, y, rad, rot) {
  const points = [];

  for (let i = 0; i < 3; i++) {
    points.push(p5.Vector.fromAngle(i * (TAU / 3)).setMag(rad));
  }

  push();
  translate(x, y);
  rotate(rot);

  for (let i = 0; i < 3; i++) {
    const next = (i + 1) % 3;
    line(points[i].x, points[i].y, 0, 0);
    line(points[i].x, points[i].y, points[next].x, points[next].y);
  }

  pop();
}

/**Draws the most basic element of the yaeurabana pattern
 * @param {Number} x - x coord of the center of the triangle
 * @param {Number} y - y coord of the center of the triangle
 * @param {Number} rad - 'radius' of the triangle. distance from the center to a point
 * @param {Number} rot - rotation of the triangle in radians
 * @void
 */
function yaeurabana(x, y, rad, rot) {
  const corners = [];
  const midpoints = [];
  const hex_corners = [];
  const zero = createVector(0, 0);
  for (let i = 0; i < 3; i++) {
    corners.push(p5.Vector.fromAngle(i * (TAU / 3)).setMag(rad));
    hex_corners.push(p5.Vector.lerp(corners[i], zero, 0.5));
  }
  for (let i = 0; i < 3; i++) {
    const next = (i + 1) % 3;
    midpoints.push(p5.Vector.lerp(corners[i], corners[next], 0.5));
  }

  push();
  translate(x, y);
  rotate(rot);
  for (let i = 0; i < 3; i++) {
    const next = (i + 1) % 3;
    line(corners[i].x, corners[i].y, corners[next].x, corners[next].y);
    line(corners[i].x, corners[i].y, hex_corners[i].x, hex_corners[i].y);
    line(midpoints[i].x, midpoints[i].y, hex_corners[i].x, hex_corners[i].y);
    line(
      midpoints[i].x,
      midpoints[i].y,
      hex_corners[next].x,
      hex_corners[next].y
    );
  }

  pop();
}

/**Draws the most basic element of the yaeurabana pattern
 * @param {Number} x - x coord of the center of the triangle
 * @param {Number} y - y coord of the center of the triangle
 * @param {Number} rad - 'radius' of the triangle. distance from the center to a point
 * @param {Number} rot - rotation of the triangle in radians
 * @param {number} [inner_size=0.25] - the ratio of the size of the inner triangle
 * @void
 */
function kikyouasanoha(x, y, rad, rot, inner_size = 0.25) {
  const corners = [];
  const inside = [];

  const center = createVector(0, 0);
  for (let i = 0; i < 3; i++) {
    corners.push(p5.Vector.fromAngle(i * (TAU / 3)).setMag(rad));
    inside.push(p5.Vector.lerp(center, corners[i], inner_size));
  }

  push();
  translate(x, y);
  rotate(rot);

  for (let i = 0; i < 3; i++) {
    const next = (i + 1) % 3;
    line(corners[i].x, corners[i].y, inside[i].x, inside[i].y);
    line(inside[i].x, inside[i].y, inside[next].x, inside[next].y);
    line(corners[i].x, corners[i].y, corners[next].x, corners[next].y);
  }

  pop();
}

/**Draws the most basic element of the shippouasanoha pattern
 * @param {Number} x - x coord of the center of the triangle
 * @param {Number} y - y coord of the center of the triangle
 * @param {Number} rad - 'radius' of the triangle. distance from the center to a point
 * @param {Number} rot - rotation of the triangle in radians
 * @param {Number} curve - (range 0 - 1) adjusts the anchor point of the curve, 0 is flat, 1 is center
 */
function shippouasanoha(x, y, rad, rot, curve = 0.5) {
  const points = [];
  const mids = [];
  const anchors = [];
  const center = createVector(0, 0);

  push();
  translate(x, y);
  rotate(rot);

  for (let i = 0; i < 3; i++) {
    points.push(p5.Vector.fromAngle(i * (TAU / 3)).setMag(rad));
  }

  for (let i = 0; i < 3; i++) {
    mids.push(p5.Vector.lerp(points[i], points[(i + 1) % 3], 0.5));
    anchors.push(p5.Vector.lerp(mids[i], center, curve));
  }

  for (let i = 0; i < 3; i++) {
    const next = (i + 1) % 3;
    line(points[i].x, points[i].y, points[next].x, points[next].y);

    noFill();
    beginShape();
    curveVertex(points[i].x, points[i].y);
    curveVertex(points[i].x, points[i].y);
    curveVertex(anchors[i].x, anchors[i].y);
    curveVertex(points[next].x, points[next].y);
    curveVertex(points[next].x, points[next].y);
    endShape();
  }
  pop();
}

/**Draws the most basic element of the yaeasa pattern
 * @param {Number} x - x coord of the center of the triangle
 * @param {Number} y - y coord of the center of the triangle
 * @param {Number} rad - 'radius' of the triangle. distance from the center to a point
 * @param {Number} rot - rotation of the triangle in radians
 * @param {Number} inner_ratio - spacing of the intersection points (0, 1) from outside to center
 */
function yaeasa(x, y, rad, rot, inner_ratio = 0.5) {
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
      points[prev(i, 3)].x,
      points[prev(i, 3)].y
    );
  }

  pop();
}

/**Draws the most basic element of the tsunoasanoha pattern
 * @param {Number} x - x coord of the center of the triangle
 * @param {Number} y - y coord of the center of the triangle
 * @param {Number} rad - 'radius' of the triangle. distance from the center to a point
 * @param {Number} rot - rotation of the triangle in radians
 * @param {Number} inner_ratio - spacing of the intersection points (0, 1) from outside to center
 */
function tsunoasanoha(x, y, rad, rot, inner_ratio = 0.5) {
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
    line(
      intersections[i].x,
      intersections[i].y,
      points[prev(i, 3)].x,
      points[prev(i, 3)].y
    );
  }

  pop();
}

/**Draws the most basic element of the bentenkikkou pattern
 * @param {Number} x - x coord of the center of the triangle
 * @param {Number} y - y coord of the center of the triangle
 * @param {Number} rad - 'radius' of the triangle. distance from the center to a point
 * @param {Number} rot - rotation of the triangle in radians
 * @param {number} [inner=0.7] - the size of the inner triangle
 * @param {number} [cross=0.125] - offsets for each cross bar
 * @void
 */
function bentenkikkou(x, y, rad, rot, inner = 0.7, cross = 0.125) {
  const points = [];
  const inner_points = [];
  const cross_points = [];

  for (let i = 0; i < 3; i++) {
    points.push(p5.Vector.fromAngle(i * (TAU / 3)).setMag(rad));
    inner_points.push(p5.Vector.fromAngle(i * (TAU / 3)).setMag(rad * inner));
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
  }

  beginShape();
  for (let p of inner_points) {
    // helper_point(p, "green");
    vertex(p.x, p.y);
  }
  endShape(CLOSE);
  pop();
}

/**Draws the most basic element of the sakura pattern
 * @param {Number} x - x coord of the center of the triangle
 * @param {Number} y - y coord of the center of the triangle
 * @param {Number} rad - 'radius' of the triangle. distance from the center to a point
 * @param {Number} rot - rotation of the triangle in radians
 * @param {number} [cross=0.125] - offsets for each cross bar
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

/**Draws the most basic element of the nijuasanoha pattern
 * @param {Number} x - x coord of the center of the triangle
 * @param {Number} y - y coord of the center of the triangle
 * @param {Number} rad - 'radius' of the triangle. distance from the center to a point
 * @param {Number} rot - rotation of the triangle in radians
 * @param {Number} inner_ratio - spacing of the intersection points (0, 1) from outside to center
 */
function nijuasanoha(x, y, rad, rot, inner_ratio = 0.5) {
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
    line(intersections[i].x, intersections[i].y, 0, 0);
  }

  pop();
}
//----------------------HELPER FUNCTIONS------------------------------------------
/**finds the next index value and wraps around at maximum value
 * @param {Number} curr - current index value
 * @param {Number} max - the maximum value
 * @returns {Number} - Next index
 */
const next = (curr, max) => {
  return (curr + 1) % max;
};

/**Finds the previous index value and wraps around at the minimum  value
 * @param {Number} curr - current index value
 * @param {Number} max - the maximum value
 * @returns {Number} - Next index
 */
const prev = (curr, max) => {
  curr -= 1;
  if (curr < 0) {
    return max - 1;
  } else {
    return curr;
  }
};

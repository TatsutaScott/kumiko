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
function yaeurabana_triangle(x, y, rad, rot) {
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

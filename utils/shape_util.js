import { TAU, sin, cos } from "./math_util.js";
import { interp } from "./math_util.js";

/**
 * Draws a line.
 *
 * @param {number} x1 Starting x value
 * @param {number} y1 Starting y value
 * @param {number} x2 Ending x value
 * @param {number} y2 Ending y value
 * @param {object} context Canvas context to draw to
 */

function line(x1, y1, x2, y2, context) {
  context.beginPath(); // Start a new path
  context.moveTo(x1, y1); // Move the pen to (x1, y1)
  context.lineTo(x2, y2); // Draw a line to (x2, y2)
  context.stroke(); // Color in the stroke
}

/**
 * Generates an ellipse shaped path
 * @param {Number} x - x position
 * @param {Number} y - y position
 * @param {Number} w - width 
 * @param {Number} h - height
 * @param {Number} r - radius
 * @returns {Path2D} - path object representing an ellipse
 */

function ellipse(x, y, w, h, r = 0) {
  const path = new Path2D(); // inits the path object 
  path.ellipse(x, y, w, h, r, 0, TAU); // adds an ellipse to the path
  return path;
}

/**
 * Generates a star shaped path
 * @param {Number} x - x position
 * @param {Number} y - y position
 * @param {Number} w - width
 * @param {Number} h - height
 * @param {Number} points - number of points
 * @param {Number} o - offset between outer point and inner angle
 * @param {Number} i_curv - inner curve (0 is a point)
 * @param {Number} o_curv - outer curve (1 is a point)
 * @returns {Path2D} - path object representing a star
 */
function star(x, y, w, h, points, o = 0.5, i_curv = 0, o_curv = 1) {
  const angle_step = TAU / points; // angle step size for each point of the star
  const path = new Path2D(); // init 4 path object

  for (let i = 0; i < points; i++) {
    const c_a = i * angle_step; //angle for center points
    const r_a = (i * 2 - 1) * (angle_step / 2); // angle for right points
    const l_a = (i * 2 + 1) * (angle_step / 2); // angle for left points

    const center = [x + sin(c_a) * w, y + cos(c_a) * h]; // center point

    // right point and right control points
    const right = [x + sin(r_a) * w * o, y + cos(r_a) * h * o];
    const ctrl_r_1 = [
      x + sin(interp(i_curv, r_a, c_a)) * w * o,
      y + cos(interp(i_curv, r_a, c_a)) * h * o,
    ];
    const ctrl_r_2 = [
      x + sin(interp(o_curv, r_a, c_a)) * w,
      y + cos(interp(o_curv, r_a, c_a)) * h,
    ];

    // left point and left control points
    const left = [x + sin(l_a) * w * o, y + cos(l_a) * h * o];
    const ctrl_l_1 = [
      x + sin(interp(i_curv, l_a, c_a)) * w * o,
      y + cos(interp(i_curv, l_a, c_a)) * h * o,
    ];
    const ctrl_l_2 = [
      x + sin(interp(o_curv, l_a, c_a)) * w,
      y + cos(interp(o_curv, l_a, c_a)) * h,
    ];

    // moves to the start of the path if its the first point
    if (i == 0) path.moveTo(...right);

    // add curve to path
    path.bezierCurveTo(...ctrl_r_1, ...ctrl_r_2, ...center);
    path.bezierCurveTo(...ctrl_l_2, ...ctrl_l_1, ...left);
  }
  return path;
}

export { line, star, ellipse };

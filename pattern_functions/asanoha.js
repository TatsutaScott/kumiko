class Asanoha {
  /**Draws the most basic element of the asanoha pattern
   * @param {Number} x - x coord of the center of the triangle
   * @param {Number} y - y coord of the center of the triangle
   * @param {Number} rad - 'radius' of the triangle. distance from the center to a point
   * @param {Number} rot - rotation of the triangle in radians
   * @void
   */
  static triangle(x, y, rad, rot) {
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

  /**Draws a cluster of triangles in a hexagon for a asanoha pattern
   * @param {Number} x - x coord of the center of the hexagon
   * @param {Number} y - y coord of the center of the hexagon
   * @param {Number} rad - 'radius' of the hexagon. distance from the center to the edge of one of the triangles
   * @param {Number} rot - rotation of the hexagon in radians
   * @void
   */
  static hexagon(x, y, rad, rot) {
    push();
    translate(x, y);
    rotate(rot);

    const triangle_radius = rad / (1 + cos(TAU / 6));

    for (let i = 0; i < 6; i++) {
      const theta = i * (TAU / 6);
      const pos = p5.Vector.fromAngle(theta).setMag(triangle_radius);
      Asanoha.triangle(pos.x, pos.y, triangle_radius, theta + PI);
    }

    pop();
  }

  /**Draws the asanoha pattern within a defined space
   * @param {Number} x - x coord of top left corner of pattern space
   * @param {Number} y - y coord of top left corner of pattern space
   * @param {Number} w - width of pattern space
   * @param {Number} h - h of pattern space
   * @param {Number} cols - number of columns
   * @param {Number} rot - rotation of the pattern in radians
   */
  static pattern(x, y, w, h, cols, rot = 0) {
    const unit_width = w / cols;
    const unit_height = unit_width * Math.cos(TAU / 12);

    push();
    translate(x, y);
    rotate(rot);

    for (let i = 0; i <= cols; i++) {
      let row_num = 0;
      while (row_num * unit_height <= h) {
        const x_offset = row_num % 2 == 0 ? 0 : w / (cols * 2);

        Asanoha.hexagon(
          i * unit_width + x_offset,
          row_num * unit_height,
          unit_width / 2,
          0
        );

        row_num += 1;
      }
    }

    pop();
  }
}

export default Asanoha;

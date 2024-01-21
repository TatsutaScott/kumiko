/**
 * An easy short hand variable for Two PI
 * @constant
 * @type {number}
 */
export const TAU = Math.PI * 2;

/**
 * Converts an angle from radians to degrees
 * @param {number} radians - angle in radians
 * @returns {number} angle in degrees
 */
export const toDeg = (radians) => (radians * 180) / Math.PI;

/**
 * Converts and angle from degrees to radians
 * @param {number} degrees - angle in degrees
 * @returns {number} angle in radians
 */
export const toRad = (degrees) => (degrees * Math.PI) / 180;

/**
 * Scales a value between an input range and maps it to an output range
 * @param {number} n - number to be scaled
 * @param {number} inputLo - lower boundary for input range
 * @param {number} inputHi - upper boundary for input range
 * @param {number} outputLo - lower boundary for output range
 * @param {number} outputHi - upper boudnary for output range
 * @returns {number} scaled value
 */

export const map = (n, inputLo, inputHi, outputLo, outputHi) => {
  const inScale = (n - inputLo) / (inputHi - inputLo); // calculates where n sits in the input range and scales it to [0,1]
  const outScale = outputHi - outputLo; // calculates the size of the output range
  return inScale * outScale + outputLo; // multiplies the input ratio by the size of the output range
};

export const interp = (ratio, start, end) => {
  return map(ratio, 0, 1, start, end);
};

export const sin = (theta) => Math.sin(theta);
export const cos = (theta) => Math.cos(theta);

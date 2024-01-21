/**
 * Creates a canvas DOM element, as well as a 2D drawing context.
 *
 * @param {number} width Canvas width
 * @param {number} height Canvas height
 * @param {object} [parent = document.body] Parent DOM element to append canvas to
 *
 * @returns {[canvas, context]} Returns an array holding the canvas DOM element and drawing context.
 */

function makeCanvas(width, height, parent = document.body) {
  const canvas = document.createElement("canvas"); //Creates the canvas DOM element
  parent.appendChild(canvas); //Appends the canvas DOM element to a parent element

  canvas.width = width; //Sets canvas width
  canvas.height = height; //Sets canvas height

  const ctx = canvas.getContext("2d"); //Gets the drawing context from the DOM element

  return [canvas, ctx];
}

export { makeCanvas };

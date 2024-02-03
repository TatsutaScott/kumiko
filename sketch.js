import { makeCanvas } from "./utils/canvas_util.js";

const [width, height] = [600, 690]; // example image dim x 3
const [canvas, ctx] = makeCanvas(width, height);

ctx.strokeStyle = "rgb(227, 174, 30)";
ctx.fillStyle = "white";

ctx.fillRect(0, 0, width, height);
ctx.strokeRect(0, 0, width, height)
// download("test", canvas);

function download(name, canvas) {
  const link = document.createElement("a");
  link.download = `${name}.png`;
  link.href = canvas.toDataURL();
  link.click();
}

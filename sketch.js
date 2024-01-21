import { makeCanvas } from "./utils/canvas_util.js";

const [width, height] = [1000, 1000];
const [canvas, ctx] = makeCanvas(width, height);

ctx.fillStyle = "red";
ctx.fillRect(0, 0, 1000, 1000);

// download("test", canvas);

function download(name, canvas) {
  const link = document.createElement("a");
  link.download = `${name}.png`;
  link.href = canvas.toDataURL();
  link.click();
}

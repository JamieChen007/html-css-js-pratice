let drawArea = document.getElementById("drawArea");
let clear = document.getElementById("clear");
let minus = document.getElementById("minus");
let value = document.getElementById("value");
let add = document.getElementById("add");
let colorSelector = document.getElementById("colorSelector");

let isDraw = false;
let size = 10;
const ctx = drawArea.getContext("2d");
let color = "black";
let x;
let y;

colorSelector.addEventListener("change", (e) => (color = e.target.value));

minus.addEventListener("click", function () {
  if (size <= 5) {
    return;
  }
  size = parseInt(value.innerHTML) - 5;
  value.innerHTML = size;
});

add.addEventListener("click", function () {
  if (size >= 50) {
    return;
  }
  size = parseInt(value.innerHTML) + 5;
  value.innerHTML = size;
});

drawArea.addEventListener("mousedown", function (e) {
  isDraw = true;
  x = e.offsetX;
  y = e.offsetY;
});

document.addEventListener("mousemove", function (e) {
  if (isDraw) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

drawArea.addEventListener("mouseup", function (e) {
  isDraw = false;
  x = undefined;
  y = undefined;
});

clear.addEventListener("click", function () {
  ctx.clearRect(0, 0, drawArea.width, drawArea.height);
});

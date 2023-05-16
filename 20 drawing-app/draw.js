let drawArea = document.getElementById("drawArea");
let clear = document.getElementById("clear");
let minus = document.getElementById("minus");
let value = document.getElementById("value");
let add = document.getElementById("add");
let colorSelector = document.getElementById("colorSelector");

let isDraw = false;
let size = 10;

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
});

document.addEventListener("mousemove", function (e) {
  if (isDraw) {
    let newEl = document.createElement("div");
    newEl.style.height = size + "px";
    newEl.style.width = size + "px";
    newEl.style.position = "absolute";
    newEl.style.borderRadius = size / 2 + "px";
    newEl.style.backgroundColor = colorSelector.value;

    newEl.style.left =
      e.clientX -
      drawArea.getBoundingClientRect().x -
      document.body.getBoundingClientRect().x +
      "px";
    newEl.style.top =
      e.clientY -
      drawArea.getBoundingClientRect().y -
      document.body.getBoundingClientRect().y +
      "px";
    drawArea.appendChild(newEl);
  }
});

drawArea.addEventListener("mouseup", function (e) {
  isDraw = false;
  console.log("isDraw is ", isDraw);
});

clear.addEventListener("click", function () {
  drawArea.innerHTML = "";
});

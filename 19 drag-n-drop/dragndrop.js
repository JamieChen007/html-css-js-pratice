const bluebox = document.getElementById("bluebox");
const whitebox = document.getElementsByClassName("whitebox");

let initX;
let initY;
let dragable = false;

let blueboxleft = whitebox[0].getBoundingClientRect().x;
let blueboxtop = whitebox[0].getBoundingClientRect().y;

//currently white box selected
let whiteboxSelected;

//last time final white box selected
let whiteBoxLastSelect;

//get all whitebox X and Y, set as 2 arrays
let whiteboxX = [];
let whiteboxY = [];
for (let i = 0; i < whitebox.length; i++) {
  whiteboxX.push(whitebox[i].getBoundingClientRect().x);
  whiteboxY.push(whitebox[i].getBoundingClientRect().y);
}

bluebox.addEventListener("mousedown", function (e) {
  dragable = true;
  initX = e.clientX;
  initY = e.clientY;
});

document.addEventListener("mousemove", function (e) {
  if (dragable) {
    let currX = e.clientX;
    let currY = e.clientY;

    let changeX = currX - initX;
    let changeY = currY - initY;

    bluebox.style.left = blueboxleft + changeX + "px";
    bluebox.style.top = blueboxtop + changeY + "px";

    selectWhitBox(e);
  }
});

bluebox.addEventListener("mouseup", function (e) {
  dragable = false;

  // get blue box in which white box
  selectWhitBox(e);

  // set blue box position cover selected white box
  setBlueBoxPosition(whiteboxSelected);

  // record last time position
  blueboxleft = bluebox.getBoundingClientRect().x;
  blueboxtop = bluebox.getBoundingClientRect().y;
});

// find out blue box position currently in which white box
function selectWhitBox(e) {
  for (let j = 0; j < whiteboxX.length; j++) {
    if (
      whiteboxX[j] < e.clientX &&
      e.clientX < whiteboxX[j] + whitebox[j].offsetWidth &&
      whiteboxY[j] < e.clientY &&
      e.clientY < whiteboxY[j] + whitebox[j].offsetHeight
    ) {
      whitebox[j].style.border = "3px dashed red";
      whiteboxSelected = whitebox[j];
      return;
    }

    whitebox[j].style.cssText = "";
    // if whitebox not bee selected then return to last select whitebox position
    whiteboxSelected = whiteBoxLastSelect;
  }
}

//set bluebox initial position
setBlueBoxPosition(whitebox[0]);

//set bluebox position and record as last position
function setBlueBoxPosition(el) {
  bluebox.style.left = el.getBoundingClientRect().x + "px";
  bluebox.style.top = el.getBoundingClientRect().y + "px";
  whiteBoxLastSelect = el;
}

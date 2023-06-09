let left = document.getElementById("left_container");
let right = document.getElementById("right_container");

function expandLeft() {
  left.style.width = "75%";
  right.style.width = "25%";
}

function expandRight() {
  right.style.width = "75%";
  left.style.width = "25%";
}

function recover() {
  right.style.width = "50%";
  left.style.width = "50%";
}

left.addEventListener("mouseenter", expandLeft);
right.addEventListener("mouseenter", expandRight);

left.addEventListener("mouseleave", recover);
right.addEventListener("mouseleave", recover);

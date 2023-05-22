const speedValue = document.getElementById("speedValue");
const speedAdjBtn = document.getElementById("speedAdjBtn");
const speedTitle = document.getElementById("speedTitle");
const speedUp = document.getElementById("speedUp");
const speedDown = document.getElementById("speedDown");
const text = document.getElementById("text");

speedValue.addEventListener("mouseenter", function () {
  speedAdjBtn.style.opacity = "1";
});

speedTitle.addEventListener("mouseenter", function () {
  speedAdjBtn.style.opacity = "1";
});

speedValue.addEventListener("mouseleave", function () {
  speedAdjBtn.style.opacity = "0";
});

speedTitle.addEventListener("mouseleave", function () {
  speedAdjBtn.style.opacity = "0";
});

speedAdjBtn.addEventListener("mouseenter", function () {
  speedAdjBtn.style.opacity = "1";
});

speedAdjBtn.addEventListener("mouseleave", function () {
  speedAdjBtn.style.opacity = "0";
});

let i = 1;

speedUp.addEventListener("click", function () {
  if (i < 10) {
    i++;
    speedValue.value = i;
  }
});

speedDown.addEventListener("click", function () {
  if (i > 1) {
    i--;
    speedValue.value = i;
  }
});

let textValue = "We Love Programing!";

let index = 1;

write();

function write() {
  text.innerHTML = textValue.slice(0, index);

  index++;

  let speed = 400 / speedValue.value;

  if (index > textValue.length) {
    index = 1;
  }

  setTimeout(write, speed);
}

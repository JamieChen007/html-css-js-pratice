let textarea = document.getElementById("textarea");
let tag = document.getElementById("tag");
let spans = document.getElementsByTagName("span");

textarea.focus();
let arr = [];

function textChange() {
  let value = textarea.value.trim();

  if (window.event.keyCode === 13) {
    setTimeout(() => {
      randomHighlight();
    }, 100);
    return;
  }

  arr = value.split(",");
  if (window.event.keyCode === 188) {
    arr.pop();
  }
  createEle(arr);
}

function randomHighlight() {
  for (let j = 0; j < spans.length; j++) {
    setTimeout(() => {
      highlight(spans[j]);
    }, 100 + j * 100);
    setTimeout(() => {
      unHighlight(spans[j]);
    }, 100 + j * 200);
  }

  setTimeout(() => {
    selectRandom();
  }, 100);
}

function selectRandom() {
  const span = spans[Math.floor(Math.random() * spans.length)];
  console.log(span);
  setTimeout(() => {
    highlight(span);
  }, 1000);
}

function highlight(span) {
  span.style.backgroundColor = "blue";
}
function unHighlight(span) {
  span.style.backgroundColor = "orange";
}

function createEle(arr) {
  tag.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let newSpan = document.createElement("span");
    let newContent = document.createTextNode(arr[i]);
    newSpan.appendChild(newContent);
    tag.appendChild(newSpan);
  }
}

textarea.addEventListener("keyup", textChange);

let container = document.getElementById("container");
let showbtn = document.getElementById("showbtn");

let notify = document.getElementsByTagName("span");

let i = 0;
let array = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "night",
  "ten",
];

showbtn.addEventListener("click", createNotify);

function createNotify() {
  let newNotify = document.createElement("span");
  newNotify.innerHTML = "message " + array[i];
  i++;

  // if any notify exit then new notify locate on top of the latest notify
  if (notify.length > 0) {
    let latestNotify = notify[notify.length - 1];
    newNotify.style.bottom =
      parseInt(getComputedStyle(latestNotify).bottom) +
      latestNotify.offsetHeight +
      20 +
      "px";
  }

  container.appendChild(newNotify);
  removeNotify(newNotify);
}

function removeNotify(el) {
  setTimeout(() => {
    el.remove();
    i = 0;
  }, 2000);
}

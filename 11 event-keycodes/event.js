let value = document.getElementsByClassName("value");

let tips = document.getElementById("tips");
let eventboxes = document.getElementsByClassName("eventbox");
eventboxes = Array.from(eventboxes);

window.onkeydown = () => {
  tips.style.display = "none";
  eventboxes.forEach(function (item, index, arr) {
    arr[index].style.display = "flex";
  });

  value[0].innerHTML = window.event.key;
  value[1].innerHTML = window.event.keyCode;
  value[2].innerHTML = window.event.code;
};

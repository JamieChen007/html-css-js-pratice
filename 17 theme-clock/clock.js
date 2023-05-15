let body = document.getElementById("body");
let container = document.getElementById("container");
let modebtn = document.getElementById("modebtn");
let clock = document.getElementById("clock");
let time = document.getElementById("time");
let date = document.getElementById("date");
let day = document.getElementById("day");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let dateVal = new Date();
let arrDay = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];

let arrMonth = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

time.innerHTML =
  addZero(hourFormat(addZero(dateVal.getHours()))) +
  ":" +
  addZero(dateVal.getMinutes()) +
  " " +
  amorpm(dateVal.getHours());

day.innerHTML = addZero(dateVal.getDate());

date.innerHTML = arrDay[dateVal.getDay()] + "," + arrMonth[dateVal.getMonth()];

secondChange(dateVal.getSeconds(), 60);

function secondChange(currNum, target) {
  let interval = setInterval(function () {
    currNum++;
    hour.style.transform =
      "rotate(" +
      Number(
        (hourFormat(addZero(dateVal.getHours())) * 360) / 12 +
          dateVal.getMinutes() * 0.5
      ) +
      "deg)";
    minute.style.transform =
      "rotate(" + (dateVal.getMinutes() * 360) / 60 + "deg)";
    second.style.transform = "rotate(" + (currNum * 360) / 60 + "deg)";
    // console.log("rotate(" + (currNum * 360) / 60 + "deg)", currNum);
    if (currNum === target) {
      clearInterval(interval);
      dateVal = new Date();
      secondChange(dateVal.getSeconds(), 60);
    }
  }, 1000);
}

function addZero(num) {
  return num < 10 ? "0" + num : num;
}

function amorpm(num) {
  return num < 12 ? "AM" : "PM";
}

function hourFormat(num) {
  return num <= 12 ? num : num - 12;
}

modebtn.addEventListener("click", function () {
  body.classList.toggle("dark");
  container.classList.toggle("dark");
  modebtn.classList.toggle("dark");
  modebtn.innerHTML === "Light mode"
    ? (modebtn.innerHTML = "Dark mode")
    : (modebtn.innerHTML = "Light mode");
  clock.classList.toggle("dark");
  time.classList.toggle("dark");
  date.classList.toggle("dark");
  day.classList.toggle("dark");
  hour.classList.toggle("dark");
  minute.classList.toggle("dark");
});

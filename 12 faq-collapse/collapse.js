let openBtn = document.getElementsByClassName("open");
let closeBtn = document.getElementsByClassName("close");
let question_container = document.getElementsByClassName("question_container");

openBtn = Array.from(openBtn);
closeBtn = Array.from(closeBtn);

let toggle = function (index) {
  return function () {
    question_container[index].classList.toggle("active");
  };
};

openBtn.forEach(function (item, index, arr) {
  arr[index].onclick = toggle(index);
});

closeBtn.forEach(function (item, index, arr) {
  arr[index].onclick = toggle(index);
});

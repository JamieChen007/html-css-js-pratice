const btn = document.getElementById("toggle");

const nav = document.getElementsByClassName("nav");

btn.addEventListener("click", function () {
  nav[0].classList.toggle("active");
});

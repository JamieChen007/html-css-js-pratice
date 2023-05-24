let i = 0;
let slider = document.getElementsByName("slider");
let body = document.body;

function leftSlide() {
  slider[i].className = "slide";
  i--;
  if (i <= -1) {
    i = slider.length - 1;
  }
  slider[i].className = "slideActive";
  body.style.backgroundImage = slider[i].style.backgroundImage;
}

function rightSlide() {
  slider[i].className = "slide";
  i++;
  if (i >= slider.length) {
    i = 0;
  }
  slider[i].className = "slideActive";
  body.style.backgroundImage = slider[i].style.backgroundImage;
}

document
  .getElementsByClassName("leftArrow")[0]
  .addEventListener("click", leftSlide);

document
  .getElementsByClassName("rightArrow")[0]
  .addEventListener("click", rightSlide);

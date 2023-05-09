let setBtn = document.getElementById("setBtn");
let closeBtn = document.getElementById("closeBtn");
let webpage = document.getElementById("webpage");
let menu = document.getElementById("menu");

let displayMenu = function () {
  return function () {
    webpage.style.transformOrigin = "left top";
    webpage.style.transform = "rotate(-0.04turn)";
    setBtn.style.zIndex = "0";
    closeBtn.style.zIndex = "1";
    closeBtn.style.zIndex = "2";
  };
};

let hideMenu = function () {
  return function () {
    webpage.style.transform = "rotate(0turn)";
    setBtn.style.zIndex = "1";
    closeBtn.style.zIndex = "0";
  };
};

setBtn.onclick = displayMenu();
closeBtn.onclick = hideMenu();

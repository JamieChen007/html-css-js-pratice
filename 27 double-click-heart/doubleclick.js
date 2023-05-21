const picture = document.getElementById("picture");

const times = document.getElementById("times");
let i = 0;
picture.addEventListener("dblclick", function (e) {
  //   let loveWidth = window
  //     .getComputedStyle(picture, "::after")
  //     .getPropertyValue("width");

  picture.classList.add("like");

  // heart width is 200px and height is 200px, 1/2 is 100
  let loveWidth = e.offsetX - 100;
  let loveHeight = e.offsetY - 100;

  let cssRulesLength = document.styleSheets[0].cssRules.length;

  //e.offsetX - .picture::after.height/2
  document.styleSheets[0].insertRule(
    ".picture::after { left:" + loveWidth + "px" + " }",
    cssRulesLength
  );
  document.styleSheets[0].insertRule(
    ".picture::after { top:" + loveHeight + "px" + " }",
    cssRulesLength + 1
  );
  //   document.styleSheets[0].insertRule(".picture::after { display:none }", 0);

  i++;
  times.innerHTML = i;

  setTimeout(() => {
    picture.classList.remove("like");
    // delete 'left' css
    document.styleSheets[0].deleteRule(cssRulesLength);
    // delete 'top' css
    document.styleSheets[0].deleteRule(cssRulesLength);
  }, 500);
});

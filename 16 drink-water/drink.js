let smallCup = document.querySelectorAll(".smallcup");
smallCup = Array.from(smallCup);

let remained = document.getElementById("remained");
let drank = document.getElementById("drank");

// remained change
function remainedChange(index, fullSmallCups) {
  let remainValue = 2 - (index + 1) * 0.25;
  if (index + 1 === smallCup.length) {
    remained.innerHTML = "";
  } else {
    remained.innerHTML = remainValue + "L Remained";
  }

  remained.style.lineHeight = (40 * remainValue) / 2 + "vh";
  remained.style.height = (40 * remainValue) / 2 + "vh";

  if (fullSmallCups === 0) {
    remained.innerHTML = "2L Remained";
    remained.style.lineHeight = "40vh";
    remained.style.height = "40vh";
  }
}

// drankChange
function drankChange(index, fullSmallCups) {
  let drankValue = (((index + 1) * 0.25) / 2) * 100;

  drank.innerHTML = drankValue + "%";

  drank.style.lineHeight = (40 * drankValue) / 100 + "vh";
  drank.style.height = (40 * drankValue) / 100 + "vh";

  if (fullSmallCups === 0) {
    drank.innerHTML = "";
    drank.style.lineHeight = "0vh";
    drank.style.height = "0vh";
  }
}

// small cup change
let selectSmallCup = function (index) {
  return function () {
    let fullSmallCups;
    if (
      smallCup[index].className === "smallcup active" &&
      smallCup[index + 1].className !== "smallcup active"
    ) {
      smallCup[index].classList.remove("active");
      fullSmallCups = document.querySelectorAll(".smallcup.active").length;
      remainedChange(index - 1, fullSmallCups);
      drankChange(index - 1, fullSmallCups);
      return;
    }
    for (let j = 0; j < smallCup.length; j++) {
      smallCup[j].classList.remove("active");
    }
    for (let i = 0; i < index + 1; i++) {
      smallCup[i].classList.toggle("active");
    }

    fullSmallCups = document.querySelectorAll(".smallcup.active").length;

    remainedChange(index, fullSmallCups);
    drankChange(index, fullSmallCups);
  };
};

smallCup.forEach(function (item, index, arr) {
  arr[index].onclick = selectSmallCup(index);
});

let sounds = document.getElementsByClassName("audio");

let btns = document.getElementsByClassName("button");

sounds = Array.from(sounds);
btns = Array.from(btns);

let playSound = function (index) {
  return function () {
    sounds.forEach(function (item, index, arr) {
      arr[index].pause();
      arr[index].currentTime = 0;
    });
    sounds[index].play();
  };
};

btns.forEach(function (item, index, arr) {
  arr[index].onclick = playSound(index);
});

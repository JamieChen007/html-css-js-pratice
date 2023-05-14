const twitterFollowers = document.getElementById("twitterFollowers");
const youtubeFollowers = document.getElementById("youtubeFollowers");
const facebookFollowers = document.getElementById("facebookFollowers");

let currNum;
let target;

count(10465, 12000, twitterFollowers);

count(3254, 5000, youtubeFollowers);

count(5423, 7500, facebookFollowers);

function count(currNum, target, el) {
  let interval = setInterval(function () {
    currNum++;
    el.innerHTML = currNum;
    if (currNum === target) {
      clearInterval(interval);
    }
  }, 1);
}

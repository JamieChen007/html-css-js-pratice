let bgcolor = ["#FFB866", "#252E33", "#2A86BA", "#FD3555"];

let h1Text = ["Flying eagle", "Lonely castle", "Bluuue Sky", "Nature flower"];

let h3Text = [
  "in the sunset",
  "in the wilderness",
  "with it's mountains",
  "all in pink",
];

let bgUrl = [
  "https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80",
  "https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=8ecdee5d1b3ed78ff16053b0227874a2&amp;auto=format&amp;fit=crop&amp;w=1002&amp;q=80",
  "https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80",
];

let title = document.getElementById("title");
let content = document.getElementById("content");
let left = document.getElementById("left");
let right = document.getElementById("right");
let down = document.getElementById("down");
let up = document.getElementById("up");

title.innerHTML = h1Text[0];
content.innerHTML = h3Text[0];
title.innerHTML = h1Text[0];
left.style.backgroundColor = bgcolor[0];
right.style.backgroundImage = "url(" + bgUrl[0] + ")";

let i = 0;

up.addEventListener("click", function () {
  i++;
  if (i > h1Text.length - 1) {
    i = 0;
  }

  title.innerHTML = h1Text[i];
  content.innerHTML = h3Text[i];
  title.innerHTML = h1Text[i];
  left.style.backgroundColor = bgcolor[i];
  right.style.backgroundImage = "url(" + bgUrl[i] + ")";
});

down.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = h1Text.length - 1;
  }

  title.innerHTML = h1Text[i];
  content.innerHTML = h3Text[i];
  title.innerHTML = h1Text[i];
  left.style.backgroundColor = bgcolor[i];
  right.style.backgroundImage = "url(" + bgUrl[i] + ")";
});

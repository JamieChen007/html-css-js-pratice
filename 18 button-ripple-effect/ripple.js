const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const span = document.createElement("span");
  document.body.appendChild(span);
  setTimeout(() => span.remove(), 500);
});

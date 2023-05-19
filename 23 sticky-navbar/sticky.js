let navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > navbar.offsetHeight + 150) {
    console.log("1");
    navbar.classList.add("active");
  } else {
    console.log("2");
    navbar.classList.remove("active");
  }
});

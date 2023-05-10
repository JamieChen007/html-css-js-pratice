let modules = document.querySelectorAll(".module");

window.addEventListener("scroll", moduleShow);

function moduleShow() {
  const triggerBottom = (window.innerHeight / 4) * 3;

  modules.forEach((module) => {
    const moduleTop = module.getBoundingClientRect().top;

    if (moduleTop < triggerBottom) {
      module.classList.add("show");
    } else {
      module.classList.remove("show");
    }
  });
}

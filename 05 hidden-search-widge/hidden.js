/* <div class="search active">
      <input type="text" class="text" placeholder="Search..." />
      <button class="searchBtn"><i class="fas fa-search"></i></button>
    </div> */

let search = document.getElementsByClassName("search")[0];

let searchBtn = document.getElementsByClassName("searchBtn")[0];
let text = document.getElementsByTagName("input")[0];
// let i = 1;

function hide() {
  //   if (i % 2 === 1) {
  //     search.classList.remove("active");
  //   } else if (i % 2 === 0) {
  //     search.classList.add("active");
  //   }
  //   i++;
  search.classList.toggle("active");
  text.focus();
}

searchBtn.addEventListener("click", hide);

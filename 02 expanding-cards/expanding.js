let card = document.getElementsByName("card");

let expand = function (index) {
  return function () {
    for (let i = 0; i < card.length; i++) {
      card[i].className = "card";
    }
    card[index].className = "card_expand";
  };
};

card.forEach(function (item, index, arr) {
  arr[index].onclick = expand(index);
});

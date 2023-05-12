let btn = document.getElementById("btn");

let joke = document.getElementById("joke");

getJoke();

async function getJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  joke.innerHTML = data.joke;
}

btn.addEventListener("click", getJoke);

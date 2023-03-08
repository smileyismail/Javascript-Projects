let joke = document.querySelector(".joke-container");
let btn = document.querySelector(".btn");

getJoke();

async function getJoke() {
  let response = await fetch("https://icanhazdadjoke.com", {
    method: "GET",
    headers: {
      Accept: "application/json",
      // Accept: "application/json",
    },
  });
  //   console.log(response);
  let data = await response.json();
  //   console.log(data);
  joke.innerHTML = data.joke;
}

btn.addEventListener("click", () => {
  getJoke();
});

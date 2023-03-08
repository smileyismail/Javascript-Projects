let container = document.querySelector(".container");
let yes_btn = document.querySelector(".yes_btn");
let no_btn = document.querySelector(".no_btn");

no_btn.addEventListener("click", () => {
  no_btn.style.position = "absolute";

  let random_horizontal = Math.floor(Math.random() * container.clientWidth);
  let random_vertical = Math.floor(Math.random() * container.clientHeight);

  if (random_horizontal >= container.clientWidth / 2) {
    no_btn.style.left = `${random_horizontal - no_btn.clientWidth}px`;
  }

  if (random_vertical >= container.clientHeight / 2) {
    no_btn.style.top = `${random_vertical - no_btn.clientHeight}px`;
  }
});

yes_btn.addEventListener("click", () => {
  container.innerHTML = "<h2>I knew it! 😂😂</h2>";
});

// console.log(Math.random());
// console.log(Math.random() * container.clientWidth);
// console.log(Math.floor(Math.random() * 100));

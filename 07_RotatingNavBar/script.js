let openbtn = document.getElementById("open");
let closebtn = document.getElementById("close");
let container = document.querySelector(".container");

openbtn.addEventListener("click", () => {
    container.classList.add('show-nav');
});
closebtn.addEventListener("click", () => {
    container.classList.remove('show-nav');
});


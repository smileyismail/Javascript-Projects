let elevator = document.querySelector(".elevator");
let display = document.querySelector(".display");

elevator.addEventListener("click", () => {});

function toFloorOne() {
  elevator.style.transform = "translateY(-250px)";
  display.innerText = "1";
}
function toFloorTwo() {
  elevator.style.transform = "translateY(-500px)";
  display.innerText = "2";
}

function toFloorZero() {
  elevator.style.transform = "translateY(0px)";
  display.innerText = "0";
}

function moveUp() {
  elevator.style.transform = "translateY(-250px)";
}

function moveDown() {
  elevator.style.transform = "translateY(250px)";
}

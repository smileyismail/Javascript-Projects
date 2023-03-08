let calculator = document.getElementById("calculator");
let screen = document.getElementById("display");
let result = document.getElementById("result");

function display(num) {
  screen.value += num;
}

function clearScreen() {
  screen.value = "";
  result.value = "";
}

function del() {
  screen.value = screen.value.slice(0, -1);
}

function calculate() {
  try {
    result.value = eval(screen.value);
  } catch {
    alert("invalid input");
  }
  if (result.value == "undefined") {
    result.value = "";
  }
}
window.addEventListener("keydown", function (pressed) {
  if (pressed.key == "Enter") {
    calculate();
  }
});

// function show() {
//   calculator.style.display = "grid";
// }
// function hide() {
//   calculator.style.display = "none";
// }

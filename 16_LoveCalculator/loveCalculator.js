let userName = document.getElementById("yourName");
let crushName = document.getElementById("crushName");
let error = document.getElementById("error");
let btn = document.getElementById("submitBtn");
let resultTxt = document.getElementById("resultTxt");
let resultYName = document.getElementById("resultYName");
let resultCName = document.getElementById("resultCName");

let valid = false;

let love;

btn.addEventListener("click", calculateLove);

function calculateLove(e) {
  e.preventDefault();
  love = Math.floor(Math.random() * 100);
  if (userName.value.length < 3 && crushName.value.length < 3) {
    error.innerHTML = "Names must have at least 3 letters";
    valid = false;
  } else {
    error.innerHTML = "";
    valid = true;
  }

  //   if (crushName.value.length == "") {
  //     error.innerHTML = "User password can not be empty";
  //     valid = false;
  //   } else {
  //     error.innerHTML = "";
  //     valid = true;
  //   }
  if (valid) {
    resultYName.innerHTML = userName.value;
    resultTxt.innerHTML = love + "%";
    resultCName.innerHTML = crushName.value;

    userName.value = "";
    crushName.value = "";
  }
}

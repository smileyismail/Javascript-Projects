let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;

function start() {
  timer = true;
  stopwatch();
}

function stop() {
  timer = false;
}

function reset() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

function stopwatch() {
  if (timer == true) {
    count += 1;
    if (count == 100) {
      count = 0;
      sec += 1;
    }

    if (sec == 60) {
      sec = 0;
      min += 1;
    }
    if (min == 60) {
      min = 0;
      hr += 1;
    }
    let hrstring = hr;
    let minstring = min;
    let secstring = sec;
    let countstring = count;

    if (hr < 10) {
      hrstring = "0" + hrstring;
    }
    if (min < 10) {
      minstring = "0" + minstring;
    }
    if (sec < 10) {
      secstring = "0" + secstring;
    }
    if (count < 10) {
      countstring = "0" + countstring;
    }

    document.getElementById("hr").innerText = hrstring;
    document.getElementById("min").innerText = minstring;
    document.getElementById("sec").innerText = secstring;
    document.getElementById("count").innerText = countstring;
    setTimeout("stopwatch()", 10);
  }
}

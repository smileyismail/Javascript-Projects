setInterval(clock, 1000);

function clock() {
    let d = new Date();
    let hour = d.getHours() * 30 + d.getMinutes() / 2;
    let minute = d.getMinutes() * 6;
    let second = d.getSeconds() * 6;
    document.getElementById("hr").style.transform = "rotate(" + hour + "deg)";
    document.getElementById("min").style.transform = "rotate(" + minute + "deg)";
    document.getElementById("sec").style.transform = "rotate(" + second + "deg)";
}
clock();
let eventKey = document.getElementById("eventKey");
let eventKeyCode = document.getElementById("eventKeyCode");
let eventCode = document.getElementById("eventCode");

eventKey.setAttribute("value", " ");
eventKeyCode.setAttribute("value", " ");
eventCode.setAttribute("value", " ");

window.addEventListener("keydown", (e) => {
  eventKey.setAttribute("value", e.key);
  eventKeyCode.setAttribute("value", e.keyCode);
  eventCode.setAttribute("value", e.code);
  //   container.innerHTML = `
  //     <div class="key">
  //         ${e.key === " " ? "space" : e.key}
  //         <small>Event key</small>
  //     </div>

  //     <div class="key">
  //         ${e.keyCode}
  //         <small>Event Keycode</small>
  //     </div>

  //     <div class="key">
  //         ${e.code}
  //         <small>Event code</small>
  //     </div>`;
});

// DOM ELEMENTS
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

const showAmPm = true;

// Show time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12 hr format

  hour = hour % 12 || 12;

  // output time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm && amPm}`;
  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return parseInt(n, 10) < 10 ? "0" : "" + n;
}
// set Background and Greeting
function setBgGreet() {
  let today = new Date();
  let hour = today.getHours();
  if (hour < 12) {
    // morning
    document.body.style.backgroundImage = "";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    // afternoon
    document.body.style.backgroundImage = "";
    greeting.textContent = "Good Afternoon";
  } else {
    // evening
    document.body.style.backgroundImage = "";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
    document.body.style.background = "black";
  }
}

// get name function
function getName() {
  if (localStorage.getItem("name" == null)) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}
// get focus function
function getFocus() {
  if (localStorage.getItem("focus" == null)) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}
// Set Name

function setName(e) {
  if (e.type == "keypress") {
    // make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}
// set focus
function setFocus(e) {
  if (e.type == "keypress") {
    // make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// Run

showTime();
setBgGreet();
getName();
// setName();

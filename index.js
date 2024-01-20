let count = 0;

//OR

let countNum = document.getElementById("counter");
let countNum2 = document.getElementById("counter");
let saveCount = document.getElementById("save-el");

function AddOne() {
  let countAdd = (count += 1);
  // document.getElementById("counter").innerHTML = countAdd;

  countNum.textContent = countAdd;
}
function MinusOne() {
  let countMinus = (count -= 1);
  countNum2.textContent = countMinus;
}

function Save() {
  let countDash = count + " / ";
  saveCount.textContent += countDash;
  countNum.textContent = 0;
  countNum2.textContent = 0;
  count = 0;
}
function Clear() {
  document.getElementById("save-el").textContent = "Previous Entries:";
}
const sound1 = new Audio();
sound1.src = "audio/clear-mouse-clicks.wav";
const sound2 = new Audio();
sound2.src = "audio/clear-mouse-clicks.wav";
const sound3 = new Audio();
sound3.src = "audio/clear-mouse-clicks.wav";
const sound4 = new Audio();
sound4.src = "audio/clear-mouse-clicks.wav";

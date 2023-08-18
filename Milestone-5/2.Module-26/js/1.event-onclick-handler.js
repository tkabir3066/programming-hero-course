// onclick handler

function makeRed() {
  document.body.style.backgroundColor = "red";
}

//onclick
const greenBtnElm = document.querySelector("#make-green");

greenBtnElm.onclick = makeGreen;
function makeGreen() {
  document.body.style.backgroundColor = "green";
}

const purpleBtn = document.getElementById("make-purple");

purpleBtn.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

//====== event listener ========//

const blueBtn = document.getElementById("make-blue");

blueBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});

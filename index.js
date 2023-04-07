let cardAlone = document.getElementById("cardAlone");
let btnAlone = document.getElementById("buttonAlone");
let restNumber = document.getElementById("restNumber");
let pDisplay = document.getElementById("pDisplay");
let cardRandomNumber;
let restNumber0;
function cardAloneNumber() {
  cardRandomNumber = Math.floor(Math.random() * (12 - 1 + 1) + 1);
  cardAlone.innerHTML = cardRandomNumber;
  restNumber0 = 21 - cardRandomNumber;

  if (restNumber0 > 0 && restNumber0 <= 12) {
    restNumber.innerHTML = restNumber0;
    pDisplay.innerHTML = "";
  } else if (restNumber0 > 12) {
    restNumber.innerHTML = restNumber0;
    pDisplay.innerHTML = "Aún podés pedir otra carta sin riesgos!";
  }
}

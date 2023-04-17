let cardAlone = document.getElementById("cardAlone");
let btnAlone = document.getElementById("buttonAlone");
let restNumber = document.getElementById("restNumber");
let pDisplay = document.getElementById("pDisplay");
let btnAloneReset = document.getElementById("buttonAloneReset");
let btnAloneResetWin = document.getElementById("buttonAloneResetWin");
let cardOne = document.getElementById("cardOne");
let cardRandomNumber;
let restNumber0;
let resultTotal;
let arrayCards = [];
let messageLost = document.getElementById("messageLost");
let messageWin = document.getElementById("messageWin");
restNumber.innerHTML = 21;
function cardAloneNumber() {
  cardRandomNumber = Math.floor(Math.random() * (12 - 1 + 1) + 1);

  pushCards();
}

function pushCards() {
  arrayCards.push(cardRandomNumber);
  cardOne.innerHTML =
    "Te salió la carta Número: " + arrayCards[arrayCards.length - 1];

  console.log(arrayCards);
  resultTotal = arrayCards.reduce((a, b) => a + b, 0);
  restNumber0 = 21 - resultTotal;
  if (pDisplay.innerHTML == "PERDISTE!" || pDisplay.innerHTML == "GANASTE!") {
  } else if (restNumber0 > 0 && restNumber0 <= 12) {
    cardAlone.innerHTML += arrayCards[arrayCards.length - 1] + " - ";
    restNumber.innerHTML = restNumber0;
    pDisplay.innerHTML = "";
    pDisplay.innerHTML = "Cuidado que te podés pasar de 21!";
    pDisplay.style.color = "red";
  } else if (restNumber0 > 12) {
    cardAlone.innerHTML += " " + arrayCards[arrayCards.length - 1] + " - ";
    restNumber.innerHTML = restNumber0;
    pDisplay.innerHTML = "Aún podés pedir otra carta sin riesgos!";
    pDisplay.style.color = "lightgreen";
  } else if (restNumber0 === 0) {
    cardAlone.innerHTML += arrayCards[arrayCards.length - 1];
    pDisplay.innerHTML = "GANASTE!";
    pDisplay.style.color = "darkgreen";
    messageWin.style.display = "inline";
  } else if (restNumber0 < 0) {
    cardAlone.innerHTML += arrayCards[arrayCards.length - 1];
    pDisplay.innerHTML = "PERDISTE!";
    pDisplay.style.color = "darkred";
    messageLost.style.display = "inline";
  }

  console.log(resultTotal);
}

btnAloneReset.addEventListener("click", () => {
  cardAlone.innerHTML = "Cartas Totales: ";
  pDisplay.innerHTML = " ";
  arrayCards = [];
  restNumber0 = 21 - resultTotal;
  restNumber.innerHTML = 21;
  messageLost.style.display = "none";
  console.log("prueba");
  cardOne.innerHTML = "Te salió la carta Número: ";
});

btnAloneResetWin.addEventListener("click", () => {
  cardAlone.innerHTML = "Cartas Totales: ";
  pDisplay.innerHTML = " ";
  arrayCards = [];
  restNumber0 = 21 - resultTotal;
  restNumber.innerHTML = 21;
  messageWin.style.display = "none";
  console.log("prueba");
  cardOne.innerHTML = "Te salió la carta Número: ";
});

/*
btnAlone.addEventListener("click", () => {
  cardRandomNumber = Math.floor(Math.random() * (12 - 1 + 1) + 1);
});

console.log(cardRandomNumber);
*/

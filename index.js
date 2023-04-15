let cardAlone = document.getElementById("cardAlone");
let btnAlone = document.getElementById("buttonAlone");
let restNumber = document.getElementById("restNumber");
let pDisplay = document.getElementById("pDisplay");
let btnAloneReset = document.getElementById("buttonAloneReset");
let cardRandomNumber;
let restNumber0;
let resultTotal;
let arrayCards = [];

restNumber.innerHTML = 21;
function cardAloneNumber() {
  cardRandomNumber = Math.floor(Math.random() * (12 - 1 + 1) + 1);

  pushCards();
}

function pushCards() {
  arrayCards.push(cardRandomNumber);

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
  } else if (restNumber0 < 0) {
    cardAlone.innerHTML += arrayCards[arrayCards.length - 1];
    pDisplay.innerHTML = "PERDISTE!";
    pDisplay.style.color = "darkred";
  }

  console.log(resultTotal);
}

btnAloneReset.addEventListener("click", () => {
  cardAlone.innerHTML = " ";
  pDisplay.innerHTML = " ";
  arrayCards = [];
  restNumber0 = 21 - resultTotal;
  restNumber.innerHTML = 21;
});

/*
btnAlone.addEventListener("click", () => {
  cardRandomNumber = Math.floor(Math.random() * (12 - 1 + 1) + 1);
});

console.log(cardRandomNumber);
*/

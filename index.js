let cardAlone = document.getElementById("cardAlone");
let btnAlone = document.getElementById("buttonAlone");
let restNumber = document.getElementById("restNumber");
let pDisplay = document.getElementById("pDisplay");
let cardRandomNumber;
let restNumber0;
let resultTotal;
let arrayCards = [];
function cardAloneNumber() {
  cardRandomNumber = Math.floor(Math.random() * (12 - 1 + 1) + 1);

  pushCards();
}

function pushCards() {
  arrayCards.push(cardRandomNumber);
  cardAlone.innerHTML += arrayCards[arrayCards.length - 1] + " - ";
  console.log(arrayCards);
  resultTotal = arrayCards.reduce((a, b) => a + b, 0);
  restNumber0 = 21 - resultTotal;
  if (restNumber0 > 0 && restNumber0 <= 12) {
    restNumber.innerHTML = restNumber0;
    pDisplay.innerHTML = "";
    pDisplay.innerHTML = "Cuidado que te podés pasar de 21!";
    pDisplay.style.color = "red";
  } else if (restNumber0 > 12) {
    restNumber.innerHTML = restNumber0;
    pDisplay.innerHTML = "Aún podés pedir otra carta sin riesgos!";
    pDisplay.style.color = "lightgreen";
  } else if (restNumber0 === 0) {
    pDisplay.innerHTML = "GANASTE!";
    pDisplay.style.color = "darkgreen";
  } else if (restNumber0 < 0) {
    pDisplay.innerHTML = "PERDISTE!";
    pDisplay.style.color = "darkred";
  }

  console.log(resultTotal);
}

/*
btnAlone.addEventListener("click", () => {
  cardRandomNumber = Math.floor(Math.random() * (12 - 1 + 1) + 1);
});

console.log(cardRandomNumber);
*/

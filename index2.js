let cardAlone = document.getElementById("cardAlone");
let btnAlone = document.getElementById("buttonAlone");
let restNumber = document.getElementById("restNumber");
let pDisplay = document.getElementById("pDisplay");
var cardRandomNumber;
let restNumber0;
let arrayCards = [];

function addCards() {
  cardRandomNumber = Math.floor(Math.random() * (12 - 1 + 1) + 1);
  arrayCards.push(cardRandomNumber);
  console.log(arrayCards); //funciona
}

console.log(arrayCards); //no funciona

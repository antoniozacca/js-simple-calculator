const numbers = document.querySelectorAll(".numeri");
const operatori = document.querySelectorAll(".operatori");
const somma = document.getElementById("operatore-addizione");
const sottrazione = document.getElementById("operatore-sottrazione");
const moltiplicazione = document.getElementById("operatore-moltiplicazione");
const divisione = document.getElementById("operatore-divisione");
const uguale = document.getElementById("operatore-uguale");
const cancella = document.getElementById("operatore-canc");

let result = document.getElementById("result");
for (let i = 0; i < numbers.length; i++) {
    const pulsanti = numbers[i];
    pulsanti.addEventListener('click', function () {
        result.innerText += pulsanti.innerHTML;
    })
    
}
let risultato;
for (let i = 0; i < operatori.length; i++) {
    operatori[i].addEventListener('click', function() {
        
      switch (operatori[i].id) {
        case "operatore-addizione":
            risultato = "operatore-addizione";
      
        case "operatore-sottrazione":
            risultato = "operatore-sottrazione";
            break;
        case "operatore-moltiplicazione":
            risultato = "operatore-moltiplicazione";
            break;
        case "operatore-divisione":
            risultato = "operatore-divisione";
            break;
      }
    });
  }

  cancella.addEventListener('click', function(){
    result.innerHTML= ' ';
  })
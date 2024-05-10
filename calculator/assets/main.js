const operatori = document.querySelectorAll(".operatori");
const uguale = document.getElementById("operatore-uguale");


//stampo i numeri in result
const numbers = document.querySelectorAll(".numeri");
let result = document.getElementById("result");
for (let i = 0; i < numbers.length; i++) {
    const pulsanti = numbers[i];
    pulsanti.addEventListener('click', function () {
        result.innerText += pulsanti.innerHTML;
    })
    
}

// tasto cancella
const cancella = document.getElementById("operatore-canc");
  cancella.addEventListener('click', function(){
    result.innerHTML= ' ';
  })

  //operatore +
  const somma = document.getElementById("operatore-addizione");
  somma.addEventListener('click', function (num1, num2) {
    
  })

  //operatore -
  const sottrazione = document.getElementById("operatore-sottrazione");
  sottrazione.addEventListener('click', function (){

  })

  //operatore *
  const moltiplicazione = document.getElementById("operatore-moltiplicazione");
  moltiplicazione.addEventListener('click', function(){

  })
  
  //operatore /
  const divisione = document.getElementById("operatore-divisione");
  divisione.addEventListener('click', function(){
    
  })
const operatori = document.querySelectorAll(".operatori");

let n1 = 0;
let n2 = 0;
let operatore = ''


//stampo i numeri in result
const numbers = document.querySelectorAll(".numeri");
let result = document.getElementById("result");
for (let i = 0; i < numbers.length; i++) {
    const pulsanti = numbers[i];
    pulsanti.addEventListener('click', function () {
        result.innerText += pulsanti.innerHTML;
    })
    
}

// loop per gli operatori
for (let i = 0; i < operatori.length; i++) {
    const operazione = operatori[i];
    operazione.addEventListener('click', function () {
        // result.innerText += pulsanti.innerHTML;

    n1 = parseInt(result.innerHTML);
    operatore = operazione.innerHTML;
    result.innerHTML= ' ';
    })
    
}

// tasto cancella
const cancella = document.getElementById("operatore-canc");
  cancella.addEventListener('click', function(){
    result.innerHTML= ' ';
  })


  //operatore =
  const uguale = document.getElementById("operatore-uguale");
  const moltiplicazioneSymbol= String.fromCharCode(215);
  const divisioneSymbol= String.fromCharCode(247);
  uguale.addEventListener('click', function(){
    
    n2= parseInt(result.innerHTML);


    switch(operatore){
        case '+':
           
            let somma= n1 + n2;
            result.innerHTML= somma;
        break; 

        case '-':
            let sottrazione= n1 - n2;
            result.innerHTML= sottrazione;
        break;

        case moltiplicazioneSymbol:
            let moltiplicazione= n1 * n2;
            result.innerHTML= moltiplicazione;
        break;

        case divisioneSymbol:
            let divisione= n1 / n2;
            if (n2 === 0) {
                alert("Non si può dividere per 0");
            }
            result.innerHTML= divisione;

    }
  })
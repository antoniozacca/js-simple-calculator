const numbers = document.querySelectorAll(".numeri");
const operatori = document.querySelectorAll(".operatori");
const operatoreSomma = document.querySelector(".operatore-somma");
const operatoreUguale = document.querySelector(".operatore-uguale")



for (let i = 0; i < numbers.length; i++) {
    const pulsanti = numbers[i];
    pulsanti.addEventListener('click', function () {
        const result = document.getElementById("result");
        result.innerText = pulsanti.innerHTML;
        
        for (let i = 0; i < operatori.length; i++) {
            operatori[i].addEventListener('click', function() {
              
            });
          }
    })
    
}
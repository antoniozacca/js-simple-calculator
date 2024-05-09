const numbers = document.querySelectorAll(".numeri");

for (let i = 0; i < numbers.length; i++) {
    const pulsanti = numbers[i];
    pulsanti.addEventListener('click', function () {
        const result = document.getElementById("result");
        result.innerText = i;
    })
    
}
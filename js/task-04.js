const decrementBtn = document.querySelector('[data-action = "decrement"]')
const incrementBtn = document.querySelector('[data-action = "increment"]')
const counterValue = document.querySelector("#value");
let counter = 0;
decrementBtn.addEventListener('click', countDecrement);
incrementBtn.addEventListener('click', countIncrement);
function countDecrement(){
    counter -= 1;
    counterValue.textContent = counter;
}
function countIncrement(){
    counter += 1;
    counterValue.textContent = counter;
}


const refs = {
    textInput: document.querySelector('#name-input'),
    textOutput: document.querySelector('#name-output'),
}
refs.textInput.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.textOutput.textContent = event.currentTarget.value; 
    if (!event.currentTarget.value) {
        refs.textOutput.textContent = 'Anonymous';
}
}
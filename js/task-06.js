const validationInput = document.querySelector('#validation-input');
const inputRefLength = validationInput.getAttribute('data-length');

validationInput.addEventListener('blur', inputBlur);

function inputBlur(event) {
    const isValid = event.target.value.length === Number(inputRefLength);
    
    if (isValid) {
        event.target.classList.add('valid');
        event.target.classList.remove('invalid');

    } else {
        event.target.classList.remove('valid');
        event.target.classList.add('invalid');
    }
};

const refs = {
    inputFontSizeControl: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text'),
};
refs.inputFontSizeControl.addEventListener('input', onChangeSize);
function onChangeSize(event) {
  refs.textEl.style.fontSize = `${event.currentTarget.value}px`;
}

